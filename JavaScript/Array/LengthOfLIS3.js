/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    // time complexity - O(nlogn)
    // space complexity -O(n)
    let sub = [];
    sub.push(nums[0]);
    
    for(let i=1; i<nums.length; i++){
        let num = nums[i];
        if(num > sub[sub.length-1]){
            sub.push(num);
        }else {
            let j = binarySearch(sub, num);
            sub[j] = num;
        }
    }
    return sub.length;
};
function binarySearch(sub, num){
    let low = 0;
    let high = sub.length-1;
    
    while(low<high){
        let mid = Math.floor((low+high)/2);
        if(sub[mid] == num){
            return mid;
        }
        else if(sub[mid] > num){
            high = mid;
        }
        else{
            low = mid+1;
        }
    }
    return low;
}
