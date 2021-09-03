/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
     // time complexity - O(n)
     // space complexity - O(1) as english alphabets only has 26 letters
    
    // create a map count and store each letter count
    let countMap = new Map();
    
    for(let i=0; i<s.length; i++){
        if(countMap.has(s[i])){
            countMap.set(s[i], countMap.get(s[i])+1);
        }
        else{
            countMap.set(s[i],1);
        }
    }
    // iterate the array again and if count == 1, then return index
    for(let i=0; i<s.length; i++){
        if(countMap.get(s[i]) == 1){
            return i;
        }
    }
    return -1;
};
