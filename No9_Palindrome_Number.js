/**
 * @param {number} x
 * @return {boolean}
 */

// 439 ms beats 60%;
var isPalindrome = function(x) {
    let s = x.toString();
    let i = 0;
    let j = s.length - 1;
    let result = true;

    while (i <= j) {
        if (s[i] !== s[j]) {
            result = false;
        }
        ++i;
        --j;
    }
    return result;
};


console.log(isPalindrome(111));