/**
 * @param {string} s
 * @return {boolean}
 */

//beat 55%
var isValid = function(s) {
    // 构造栈结构
    let stack = [];

    // 构造hash表达式
    let hash = {
        "{": "}",
        "(": ")",
        "[": "]"
    };

    let i = 0;
    while (i < s.length) {
        if (stack.length === 0 || ["(", "{", "["].indexOf(s[i]) != -1){
            stack.push(s[i]);
            i++;
        }
        else {
            let lastEle = stack[stack.length - 1];
            if (hash[lastEle] !== s[i]) {
                return false;
            }
            else {
                stack.pop();
                i++;
            }
        }
    }

    return stack.length ? false : true;
};