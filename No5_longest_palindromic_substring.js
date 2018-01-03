
// n~3 超出系统认可时间
var longestPalindrome = function(s) {
    let maxLength = 0;
    let maxStart = 0;
    let len = s.length;
    //i是字符串长度
    for(let i = 0; i < len; i++){
        //j是字符串起始位置
        for(let j = 0; j < len - i; j++){
            //挨个判断是否回文
            if (isPalindrome(s,i,j) && (i+1) > maxLength){
                maxLength = i + 1;
                maxStart = j;
            }
        }
    }
    return s.substring(maxStart,maxStart + maxLength);
};


function isPalindrome(s, i ,j){
    let left = j;
    let right = j + i;
    while(left<right){
        if(s[left] != s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}