// my answer beats 40%
var reverse = function(x) {
    let str = x.toString();
    let maxNumber = Math.pow(2, 31);
    let result;
    if (x < 0){
        result = 0 - Number(str.substr(1, str.length - 1).split("").reverse().join(""))
        return result < 0 - maxNumber ? 0 : result;
    } else {
        result = Number(str.split("").reverse().join(""))
        return result > maxNumber - 1 ? 0 : result;
    }
};

