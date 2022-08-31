var assert = require('assert');

const {
    insert,
    select,
    update,
    remove,
} = require('../src/app');

const userData1 = {
    id: 1,
    name: 'Maria',
    age: 20,
    gender: 'Feminino'
};

const userData2 = {
    id: 1,
    name: 'Joana',
    age: 25,
    gender: 'Feminino'
};

const userData3 = {
    id: 2,
    name: 'João',
    age: 25,
    gender: 'Masculino'
};

describe('User API', function () {
    it('POST', function () {
        assert.equal(JSON.stringify(insert({
            name: 'Maria',
            age: 20,
            gender: 'Feminino',
        })), JSON.stringify(userData1));
    });

    it('GET', function () {
        assert.equal(JSON.stringify(select(1)), JSON.stringify(userData1));
    });

    it('PUT', function () {
        assert.equal(JSON.stringify(update(1, {
            name: 'Joana',
            age: 25,
            gender: 'Feminino',
        })), JSON.stringify(userData2));
    });

    it('DELETE', function () {
        assert.equal(JSON.stringify(remove(1)), JSON.stringify(userData2));
    });

    it('PUT', function () {
        assert.equal(JSON.stringify(update(1, {
            name: 'Joana',
            age: 25,
            gender: 'Feminino',
        })), undefined);
    });

    it('DELETE', function () {
        assert.equal(JSON.stringify(remove(1)), undefined);
    });

    it('POST', function () {
        assert.equal(JSON.stringify(insert({
            name: 'João',
            age: 25,
            gender: 'Masculino',
        })), JSON.stringify(userData3));
    });
});
