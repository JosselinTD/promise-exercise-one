module.exports = function addition(a , b){
    if( isNaN(a) || isNaN(b))
        return 'isNaN';

    return parseInt(a, 10) + parseInt(b, 10);
};