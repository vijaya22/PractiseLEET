 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // use hash map
    // time complexity - O (n+m)
    // space complexity - O(n)
    if(nums1.length > nums2.length){ intersect(nums2, nums1); }
    let map1 = new Map();
    
    for(let i = 0; i<nums1.length; i++){
        if(map1.has(nums1[i])){
            map1.set(nums1[i], map1.get(nums1[i])+1);
        }
        else map1.set(nums1[i], 1)
    }
   
    let result = [];
    for(let i=0;i<nums2.length;i++){
        if(map1.has(nums2[i]) && map1.get(nums2[i])>0){
            result.push(nums2[i]);
            map1.set(nums2[i], map1.get(nums2[i])-1 );
        }
    }
    
    return result;
    
};
