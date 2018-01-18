/**
 * @param {number} num
 * @return {string}
 */

// 270ms beats 51%
var intToRoman = function(num) {
    let str = "";
    let symbol = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let value = [1000,900,500,400, 100, 90,  50, 40, 10, 9,   5,  4, 1];

    for (let i = 0; num != 0; ++i) {
        while (num >= value[i])  {
            num -= value[i];
            str += symbol[i];
        }
    }
    return str;
};


console.log(intToRoman(1));