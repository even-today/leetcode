/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 遍历半个数组的方式完成
// 216ms beats 61%
var findMedianSortedArrays = function(nums1, nums2) {
    var i = 0, j = 0, count = 0, middleLeft = -1;
    var len = nums1.length + nums2.length;
    while(i < nums1.length || j < nums2.length){
        var curr = 0;
        if(nums2[j] === undefined || nums1[i] <= nums2[j]){
            curr = nums1[i];
        }else if(nums1[i] === undefined || nums1[i] > nums2[j]){
            curr = nums2[j];
        }
        count++;
        if(len % 2 !== 0){
            if(count === (len - 1) / 2 + 1){
                return curr;
            }
        }else{
            if(count === len / 2){
                middleLeft = curr;
            }else if(count === (len / 2 + 1) && middleLeft !== -1){
                return (curr + middleLeft) / 2;
            }
        }

        if(nums2[j] === undefined || nums1[i] <= nums2[j]){
            i++;
        }else if(nums1[i] === undefined || nums1[i] > nums2[j]){
            j++;
        }
    }
    return 0;
};

// There is alson a special way to solve this problems
// http://www.growingwiththeweb.com/2015/08/find-the-median-of-two-sorted-arrays.html
// 216ms