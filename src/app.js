const users = new Map();

var userId = 1;

const insert = userData => {
    users.set(userId, {
        id: userId,
        ...userData,
    });

    return users.get(userId++);
};

const select = id => {
    return users.get(id);
};

const update = (id, userData) => {
    let user = users.get(id);

    if (user != undefined) {
        users.set(user.id, {
            id: user.id,
            ...userData
        });

        return users.get(user.id);
    }

    return undefined;
};

const remove = id => {
    let user = users.get(id);

    if (user != undefined) {
        users.delete(id);

        return user;
    }

    return undefined;
};

module.exports = {
    insert,
    select,
    update,
    remove,
};
