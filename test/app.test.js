var assert = require('assert');

var arrayList = require('../src/app');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(arrayList.indexOf(4), -1);
        });
    });
});
