/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // basically if at position the i the number should be i
    // if not swap it to 0th index ;
    // 0th index would contain duplicate element
    while(nums[0] != nums[nums[0]]){
        let next = nums[nums[0]];
        nums[nums[0]] = nums[0];
        nums[0] = next;
    }
    return nums[0];
};
