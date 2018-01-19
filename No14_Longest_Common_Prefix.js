/**
 * @param {string[]} strs
 * @return {string}
 */
// 102 ms  46%
var longestCommonPrefix = function(strs) {

    if (strs.length === 0) {
        return '';
    }

    strs = strs.sort();
    let s = strs[0];
    for (let i = s.length - 1; i >= 0; i--) {
        let isPrefix = true;
        for (let j of strs) {
            if (j.substr(0, i+1) != s.substr(0, i+1)){
                isPrefix = false;
            }
        }
        if (isPrefix) {
            return s.substr(0, i+1);
        }
    }
    return '';
};



console.log(longestCommonPrefix(['anc', 'ansdaf']))