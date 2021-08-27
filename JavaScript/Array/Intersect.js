/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // time complexity - O(nlog n + m logm)
    // space complexity - O(log n + log m)
    nums1.sort((a,b)=> a-b);
    nums2.sort((a,b)=>a-b);
    let i = 0;
    let j = 0;
    let k = 0;
    
    while(i<nums1.length && j<nums2.length) {
        if(nums1[i] < nums2[j]){
            i++;
        }
        else if( nums1[i] > nums2[j]){
            j++;
        }
        else {
            nums1[k] = nums1[i];
            k++;
            i++;
            j++
        }
    }
    return Array.from(nums1).slice(0,k);
};
