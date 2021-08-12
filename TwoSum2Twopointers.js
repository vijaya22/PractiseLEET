/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // two pointers
    // time complexity - O(n)
    // space complexity - O(1)
    let low =0;
    let high = numbers.length-1;
    while(low<high){
        let sum = numbers[low]+numbers[high];
        if(sum == target){
            return [low+1, high+1];
        }
        if(sum > target){
            high--;
        }
        else{
            low++;
        }
    }
    return [-1, -1];
};
