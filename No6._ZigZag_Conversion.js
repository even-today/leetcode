
// 通过flag来模拟字符串排列，通过数组来横向保存排列后的记录；
// 178ms beats 44%
var convert = function(s, numRows) {
    if (numRows <= 1 || numRows >= s.length) {
        return s;
    }

    // +向下 -向上
    let flag = 1;
    // 横向保存字符串
    let arr = new Array(numRows).fill("");
    // arr的控制角标，随flag变化
    let index = 1;

    for (let char of s) {
        arr[index - 1] += char;
        if (index === numRows) {
            flag = -1;
        }
        if (index === 1) {
            flag = 1;
        }
        index += flag;
    }

    return arr.join("");
}



console.log(convert("ABC", 2));