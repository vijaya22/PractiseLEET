/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // two pointer approach
    // time complexity - O(n)
    // space complexity - o(1)
    let left = 0;
    let right = height.length-1;
    let ans = 0;
    let leftMax =0;
    let rightMax = 0;
    while(left < right){
        if(height[left] < height[right]){
            height[left] >= leftMax ? leftMax = height[left] : ans += leftMax - height[left];
            left++;
        }
        else{
            height[right] >= rightMax ? rightMax = height[right] : ans+= rightMax - height[right];
            right--
        }
    }
    return ans;
};
