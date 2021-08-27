/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(!nums1.length || !nums2.length) return [];
    let set1= new Set(nums1);
    let common = new Set();
    for(let i=0;i<nums2.length;i++){
        if(set1.has(nums2[i])){
            common.add(nums2[i]);
        }
    }
    return Array.from(common);
    
};
