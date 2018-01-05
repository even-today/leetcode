
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


// n~2 n~2 动态规划可以用 二维数据记录回文状态从而减少一层复杂度 有问题（not accept）
var longestPalindrome = function (s) {
    let n = s.length;
    let longestBegin = 0;
    let maxLen = 1;
    let table = [];

    for (let i = 0; i <= n; i++) {
        table[i] = [];
    }

    for (let i = 0; i < n; i++) {
        table[i][i] = true;
    }
    for (let i = 0; i < n-1; i++) {
        if (s[i] == s[i+1]) {
            table[i][i+1] = true;
            longestBegin = i;
            maxLen = 2;
        }
    }
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n-len+1; i++) {
            let j = i+len-1;
            if (s[i] == s[j] && table[i+1][j-1]) {
                table[i][j] = true;
                longestBegin = i;
                maxLen = len;
            }
        }
    }
    return s.substr(longestBegin, maxLen);
}


// n~2 n~1 中心扩散法 // 152ms best
var longestPalindrome = function(s) {
    let longest = "";
    // 外层为中心点位置
    for(let i = 0; i < s.length; i++){
        //计算奇数子字符串 内层中心扩散
        longest = helper(s, i, 0, longest);
        //计算偶数子字符串 内层中心扩散
        longest = helper(s, i, 1, longest);
    }
    return longest;
}

function helper(s, idx, offset, longest){
    let left = idx;
    let right = idx + offset;
    while (left >= 0 && right < s.length && s[left] == s[right]) {
        left--;
        right++;
    }
    // 截出当前最长的子串
    let currLongest = s.substring(left + 1, right);
    // 判断是否比全局最长还长
    if(currLongest.length > longest.length){
        longest = currLongest;
    }
    return longest;
}



// n n 马拉车算法 105ms is best
var longestPalindrome = function(s) {
    if(s.length <= 1){
        return s;
    }
    // 预处理字符串，避免奇偶问题
    let str = preProcess(s);
    // idx是当前能够向右延伸的最远的回文串中心点，随着迭代而更新
    // max是当前最长回文串在总字符串中所能延伸到的最右端的位置
    // maxIdx是当前已知的最长回文串中心点
    // maxSpan是当前已知的最长回文串向左或向右能延伸的长度
    let idx = 0, max = 0;
    let maxIdx = 0;
    let maxSpan = 0;
    let p = [];
    for(let curr = 1; curr < str.length; curr++){
        // 找出当前下标相对于idx的对称点
        let symmetryOfCurr = 2 * idx - curr;
        // 如果当前已知延伸的最右端大于当前下标，我们可以用对称点的P值，否则记为1等待检查
        p[curr] = max > curr? Math.min(p[symmetryOfCurr], max - curr):1;
        // 检查并更新当前下标为中心的回文串最远延伸的长度
        while( (curr+p[curr]) < str.length && str[curr+p[curr]] == str[curr-p[curr]]){
            p[curr]++;
        }
        // 检查并更新当前已知能够延伸最远的回文串信息
        if(curr+p[curr] > max){
            max = p[curr] + curr;
            idx = curr;
        }
        // 检查并更新当前已知的最长回文串信息
        if(p[curr] > maxSpan){
            maxSpan = p[curr];
            maxIdx = curr;
        }
    }
    //去除占位符
    return s.substring((maxIdx-maxSpan)/2,(maxSpan+maxIdx)/2-1);
}

function preProcess(s) {
    // 如ABC,变为$#A#B#C#
    let sb = "$";
    for(let i = 0; i < s.length; i++){
        sb += "#" + s[i];
    }
    sb += "#";
    return sb;
}