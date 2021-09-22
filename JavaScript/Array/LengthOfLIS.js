/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // time complexity - O(n2)
    // space complexity - O(n)
    let dp = new Array(nums.length).fill(1);
    for(let i=1; i<nums.length; i++){
        for(let j = 0; j<i; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }
    let longest = 0;
    for(let len of dp){
        longest = Math.max(longest,len);
    }
    return longest;
};
