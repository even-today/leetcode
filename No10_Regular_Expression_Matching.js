/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */


// 163ms beats 64%
var isMatch = function(s, p) {
    let reg = new RegExp("^" + p + "$", "i");
    return reg.test(s);
};



