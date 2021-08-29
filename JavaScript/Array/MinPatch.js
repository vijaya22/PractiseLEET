/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
function minPatches(nums, n){
    // time complexity - O(n)
    // space complexity -O(1)
    // greedy aaproach
    let patches = 0;
    let i = 0;
    let miss = 1;
    while(i<nums.length){
        if(i<n && nums[i]<=miss){
            miss += nums[i];
            i++;
        }
        else{
            miss += miss;
            patches++;
        }
    }
    return patches;
}