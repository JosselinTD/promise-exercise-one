var expect = require('expect.js');
var addition = require('../sources/addition.js');

describe('Add two numbers', function(){

    it('Must return "isNaN" if one of the arguments are not a number', function(){
        var a = 'p';
        var b = 32;
        var result = addition(a, b);
        expect(result).to.be('isNaN');
    });

    it('Must return a number', function(){
        var a = '2';
        var b = 5;
        var result = addition(a, b);
        expect(result).to.be.a('number');
    });

    it('Must return a right result', function(){
        var a = '23';
        var b = 54;
        var result = addition(a, b);
        expect(result).to.be.equal(77);
    });

});