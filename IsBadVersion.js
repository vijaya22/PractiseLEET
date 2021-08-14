/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    // time complexity - O(log n)
    // space complexity - O(n)
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        while(left<right){
            let mid = Math.floor((left+right)/2);
            if(isBadVersion(mid)){
                right = mid;
            }else{
                left = mid+1;
            }
        }
        return left;
    };
};
