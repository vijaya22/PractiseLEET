/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
   // Idea is to implement binary search in 3 steps:
//#1. Finding the peak: this is just like problem peak-index-in-a-mountain-array
//#2. Apply binary search on left side of peak
//#3. If target is not found on left, apply binary search on right side of peak
    
    let left = 0;
    let right = mountainArr.length() -1 ;
    let peak = 0;
    // find mountain arr peak
    while(left< right) {
        let mid = Math.floor((left+right)/2);
        if(mountainArr.get(mid)>mountainArr.get(mid+1)) {
            right = mid;
        } else {
            left = mid+1;
            peak = mid+1;
        }
    }
    // search target element on left side 
    left = 0;
    right = peak;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let midValue = mountainArr.get(mid);
        
        if(midValue === target){
            return mid;
        }else if(midValue > target){
            right = mid-1;
        }
        else if(midValue<target){
            left = mid+1;
        }
    }
    
    // search target element on right side 
    left = peak+1;
    right = mountainArr.length()-1;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let midValue = mountainArr.get(mid);
        if(midValue === target){
            return mid;
        } else if(midValue > target){
             left = mid+1;
        } else if(midValue< target){
            right = mid-1;
        }
    }
    return -1;
    
};
