var expect = require('expect.js');
var main = require('../sources/main.js');
var distant = require('../sources/distant.js');

suite('Make distant call using callback', function(){

    test('An error should be thrown', function(){
        distant.call1('call', function(err) {
            expect(err).to.be.equal('Need init');
        });
        distant.call2('call', function(err) {
            expect(err).to.be.equal('Need init');
        });
        distant.call3('call', function(err) {
            expect(err).to.be.equal('Need init');
        });

        main.getComposed('call', function(err) {
            expect(err).to.be.equal('Need init');
        });
    });

    test('Global test', function() {
        distant.init('First', 'Second', 'Third');
        main.getComposed('Global test', function(err, res) {
            expect(err).to.be(undefined);
            expect(res).to.be.equal('Global test First Second Third');
        });

        main.step1('Just 1', function(err, res) {
            expect(err).to.be(undefined);
            expect(res).to.be.equal('Just 1 First');
        });

        main.step2('Just 2', function(err, res) {
            expect(err).to.be(undefined);
            expect(res).to.be.equal('Just 2 Second');
        });

        main.step3('Just 3', function(err, res) {
            expect(err).to.be(undefined);
            expect(res).to.be.equal('Just 3 Third');
        });
    });

    test('Second test', function() {
        distant.init('Fourth', 'Fifth', 'Sixth');
        main.getComposed('Second test', function(err, res) {
            expect(err).to.be(undefined);
            expect(res).to.be.equal('Second test Fourth Fifth Sixth');
        });
    });
});