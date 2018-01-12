var myAtoi = function(str) {
    let num = parseInt(str);

    if (num > 2147483647){num = 2147483647}
    if (num < -2147483648){num = -2147483648}

    return isNaN(num) ? 0 : num;
};

// 32位长整型 -pow(2, 31) ~ pow(2, 31) - 1