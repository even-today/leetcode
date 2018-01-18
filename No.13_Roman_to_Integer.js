
/**
 * @param {string} s
 * @return {number}
 */
// 268 ms ms 55.2% myAnswer
var romanToInt = function(s) {
    let num = 0;
    let hash = {
        M : 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] < hash[s[i+1]]) {
            num -= hash[s[i]];
        }
        else {
            num += hash[s[i]];
        }
    }

    return num;
};


console.log(romanToInt("MCMXCVI"));