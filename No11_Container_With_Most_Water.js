/**
 * @param {number[]} height
 * @return {number}
 */

// 最大盛水量取决于两边中较短的那条边，而且如果将较短的边换为更短边的话，盛水量只会变少。所以我们可以用两个头尾指针，计算出当前最大的盛水量后，将较短的边向中间移，因为我们想看看能不能把较短的边换长一点。这样一直计算到左边大于右边为止就行了。
// 95ms %65
var maxArea = function(height) {
    let maxarea = 0;
    let l = 0
    let r = height.length - 1;
    while (l < r) {
        maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
        if (height[l] < height[r])
            l++;
        else
            r--;
    }
    return maxarea;
};