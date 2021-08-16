/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // time complexity - O(log n)
    // space complexity -O(1)
    if(!nums.length) return [-1, -1];
    let start = 0;
    let end = nums.length-1;
    let first = -1;
    let last = -1;
    while(start<=end){
       let mid = Math.floor((start+end)/2);
        if(nums[mid] < target){
            start = mid+1;
        }
        else if(nums[mid] > target){
            end = mid-1;
        }
        else{
            last = mid;
            start = mid+1;
        }
    }
    start = 0;
    end = nums.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] < target){
            start = mid+1;
        }
        else if(nums[mid] > target){
            end = mid-1;
        }
        else{
            first = mid;
            end = mid-1;
        }
    }
    return [first, last];
};
