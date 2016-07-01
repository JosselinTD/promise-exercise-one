module.exports.meltChocolate = function(chocolate, cb) {
	cb('melted ' + chocolate);
}

module.exports.addMilk = function(meltedChocolate, cb) {
	cb('milked ' + meltedChocolate);
}

module.exports.addTopped = function(milkedMeltedChocolate, cb) {
	cb('topped ' + milkedMeltedChocolate);
}
