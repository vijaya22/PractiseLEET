/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // use binary search to find peak
    // time complexity - O(log n)
    // space complexity - O(log n)
    return search(nums, 0, nums.length-1);
};
function search(nums, left, right){
    if(left == right) return left;
    let mid = Math.floor((left+right)/2);
    if(nums[mid] > nums[mid + 1]){
        return search(nums, left, mid);
    }
    else return search(nums, mid+1, right);
}
