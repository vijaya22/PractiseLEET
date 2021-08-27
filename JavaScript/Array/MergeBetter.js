/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // time complexity - O((n+m))
    // space complexity - O(m)
    let num1Copy = Array.from(nums1);
    let p1 = 0;
    let p2 = 0;
    
    for(let p = 0; p<m+n; p++){
        if(p2>=n || (p1 < m && num1Copy[p1] < nums2[p2])){
            nums1[p] = num1Copy[p1];
            p1++;
        }
        else{
            nums1[p] = nums2[p2];
            p2++;
        }
    }
};
