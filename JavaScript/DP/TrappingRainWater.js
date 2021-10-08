/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // time complexity - O(n)
    // space complexity - O(n)
    if(!height.length) return 0;
    let n = height.length;
    let ans = 0; 
    let leftMaxArr =[];
    let rightMaxArr = [];
    leftMaxArr[0] = height[0];
    for(let i=1; i<height.length; i++){
        leftMaxArr[i] = Math.max(height[i], leftMaxArr[i-1]);
    }
    rightMaxArr[n-1] = height[n-1];
    for(let i=n-2; i>=0; i--){
        rightMaxArr[i] = Math.max(height[i], rightMaxArr[i+1]);
    }
    for(let i=1; i<n-1; i++){
        ans += Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i];
    }
    return ans;
};
