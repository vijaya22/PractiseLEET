/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let minimum = Number.POSITIVE_INFINITY;
    for(let i =0;i<nums.length;i++){
        if(nums[i] == target){
            if(minimum > Math.abs(i-start)){
                minimum = Math.abs(i-start);
            }
        }
    }
    return minimum;
};
