/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums.length) return -1;
    let low = 0;
    let high = nums.length-1;
    
    return bsearch(nums,low,high,target);
    
};

function bsearch(nums, low, high, target){
    if(high<low) return -1
    let pivot = Math.floor(low+(high-low)/2);
    //console.log('pivot::',pivot)
    if(nums[pivot] == target) return pivot;
    if(target < nums[pivot]){
       return bsearch(nums,low,pivot-1,target);
    }
     return bsearch(nums,pivot+1,high,target);
    
}
