/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let maxlen =0;
    for(let start =0; start<nums.length;start++){
        let zeroes = 0;
        let ones = 0;
        for(let end = start;end < nums.length;end++){
            if(nums[end] == 0){
                zeroes++;
            }
            else{
                ones++;
            }
            if(zeroes == ones){
                maxlen = Math.max(maxlen, end-start+1);
            }
        }
    }
    return maxlen;
};
