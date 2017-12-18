/**
 * Created by Elson on 2017/12/17.
 */
// my answer in 2017.12.17 123ms is OK
var twoSum = function(nums, target) {
    let index = 0;
    while(nums.length >= 2) {
        let temp = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (temp + nums[i] === target) {
                return [index, i+index];
            }
        }
        nums.splice(0,1);
        index++;
    }

    return false;
};


// nearly 100ms ，O[1] ~ O[n] is best
// best is using hash table
var twoSum = function(nums, target) {
    var len = nums.length;
    var hash = {};
    var i = 0;
    do {
        var a = nums[i];
        var j = hash[a];
        if (j !== undefined) {
            return [j, i];
        } else {
            hash[target - a] = i;
        }
    } while (++i < len);
};



