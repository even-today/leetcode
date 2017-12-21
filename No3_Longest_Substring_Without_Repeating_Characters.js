// my answer in 2017.12.21
// 148ms beats 89% man cool!!
// my answer is best!!!waoooo so cool
var lengthOfLongestSubstring = function(s) {
    let subStr = "",
        result = 0;
    for (let i of s){
        if (subStr.indexOf(i) == -1){
            subStr += i;
        }
        else {
            let j = subStr.indexOf(i);
            subStr = subStr.substr(j+1) + i;
        }
        if (subStr.length > result){
            result = subStr.length;
        }
    }
    return result;
};

// test!!!
let str = "bpfbhmipx";
let result = lengthOfLongestSubstring(str);
console.log(result);