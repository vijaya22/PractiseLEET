/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let sub = [];
    sub.push(nums[0]);
    
    for(let i=1; i< nums.length; i++){
        let num = nums[i];
        if(num > sub[sub.length-1]){
            sub.push(num);
        }else{
            let j=0;
            while(num > sub[j]){
                j++;
            }
            sub[j] = num;
        }
    }
    return sub.length;
};
