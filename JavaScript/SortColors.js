/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    // time complexity - O(n)
    // space complexity - O(1)
    let p0 = 0;
    let p2 = nums.length-1;
    let curr = 0;
    while(curr <= p2){
        if(nums[curr] == 0){
            let temp = nums[curr];
            nums[curr] = nums[p0];
            nums[p0] = temp;
            curr++;
            p0++;
        }
        else if(nums[curr] == 2){
            let temp = nums[curr];
            nums[curr] = nums[p2];
            nums[p2] = temp;
            p2--;
        }
        else{
            curr++;
        }
    }
};
