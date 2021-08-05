/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    // linear scan
    // time complexity - O(n)
    // space complexity - O(1)
    
    for(let i=0; i< arr.length-1; i++){
        if(arr[i]>arr[i+1]) return i;
    }
    return arr.length-1;
};
