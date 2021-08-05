/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    // bineary search
    // time complexity - O(log n)
    // space complexity - O(1)
    let left =0;
    let right = arr.length-1;
    while(left<right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]> arr[mid+1]){
            right = mid;
        } else left = mid+1;
    }
    return left;
};
