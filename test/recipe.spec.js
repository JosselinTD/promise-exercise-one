var expect = require('expect.js');
var recipe = require('../sources/recipe.js');

suite('Bake chocolate', function(){

    test('Must be equals to topped milked melted chocolate', function(){
        recipe.makeChocolate('chocolate', function(toBake) {
            expect(toBake).to.be.equals('topped milked melted chocolate');
        });
    });

    test('Must be equals to topped milked melted white chocolate', function(){
        recipe.makeChocolate('white chocolate', function(toBake) {
            expect(toBake).to.be.equals('topped milked melted white chocolate');
        });
    });

    test('Must be equals to topped milked melted black chocolate', function(){
        recipe.makeChocolate('black chocolate', function(toBake) {
            expect(toBake).to.be.equals('topped milked melted black chocolate');
        });
    });

});