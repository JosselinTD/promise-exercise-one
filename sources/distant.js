var step1, step2, step3;

module.exports.init = function(_1, _2, _3) {
	step1 = _1;
	step2 = _2;
	step3 = _3;
};

module.exports.call1 = function(toProcess, cb) {
	if (!step1) {
		return cb('Need init');
	}

	cb(undefined, toProcess + ' ' + step1);
};

module.exports.call2 = function(toProcess, cb) {
	if (!step1) {
		return cb('Need init');
	}

	cb(undefined, toProcess + ' ' + step2);
};

module.exports.call3 = function(toProcess, cb) {
	if (!step1) {
		return cb('Need init');
	}

	cb(undefined, toProcess + ' ' + step3);
};
