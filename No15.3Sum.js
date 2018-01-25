/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 超时了年轻人！！！naive！！！！
var threeSum = function(nums) {
    var result = [];
    while (nums.length >= 3) {
        var tempNum = nums.splice(0, 1);
        var arr = twoSum(nums, 0 - tempNum);
        if (arr && arr.length) {
            for (var ele of arr ) {
                result.push(tempNum.concat(ele));
            }
        }
    }
    for (var ele of result) {
        ele.sort(function(a, b){return a > b});
    }


    // 判断是否有重复子项
    var re = [];
    for (var i = 0; i < result.length; i++) {
        var exited = false;
        for (var j = i + 1; j < result.length; j++){
            if (result[i].toString() === result[j].toString()) {
                exited = true;
            }
        }

        if (!exited) {
            re.push(result[i]);
        }
    }

    return re;
};


var twoSum = function(nums, target) {
    var len = nums.length;
    var hash = {};
    var i = 0;
    var result = [];
    do {
        var a = nums[i];
        var j = hash[a];
        if (j !== undefined) {
            result.push([nums[j], nums[i]]);
        } else {
            hash[target - a] = i;
        }
    } while (++i < len);

    return result;
};



console.log(threeSum([-1, 0, 1, 2, -1, -4]));