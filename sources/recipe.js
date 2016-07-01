var ingredients = require('./ingredients.js');

module.exports.makeChocolate = function(chocolate, bake){
    bake(chocolate);
};
