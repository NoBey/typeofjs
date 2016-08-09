'use strict';
var test = require('ava');
var simpleType = require('./');

test('typeof String should work', function (t) {
    t.assert(simpleType('test') === 'string');
});

test('typeof Array should work', function (t) {
    t.assert(simpleType([1,2,3]) === 'array');
});

test('typeof Object should work', function (t) {
    t.assert(simpleType({name: 'ruan', age: 12}) === 'object');
});

test('typeof Number should work', function (t) {
    t.assert(simpleType(12) === 'number');
});

test('typeof Boolean should work', function (t) {
    t.assert(simpleType(false) === 'boolean');
});

test('typeof Null should work', function (t) {
    t.assert(simpleType(null) === 'null');
});

test('typeof Function should work', function (t) {
    t.assert(simpleType(function() {}) === 'function');
});

test('typeof RegExp should work', function (t) {
    t.assert(simpleType(/$a/g) === 'regexp');
});

test('typeof Date should work', function (t) {
    t.assert(simpleType(new Date()) === 'date');
});

test('typeof Undefined should work', function (t) {
    t.assert(simpleType(undefined) === 'undefined');
});
