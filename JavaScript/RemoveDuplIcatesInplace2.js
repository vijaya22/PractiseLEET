/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // time complexity - O(n)
    // space complexity - O(1)
    if(!nums.length) return 0;
    let i=1;
    let count =1;
    for(let j=1; j<nums.length; j++){
        if(nums[j] == nums[j-1]){
            count++;
        }
        else{
            count =1;
        }
        if(count <=2){
            nums[i++] = nums[j];
        }
    }
    return i; 
};
