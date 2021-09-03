/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // time complexity - O(m+n)
    // space complexity - O(1) - english alphabets have 26 chars
    if(ransomNote.length > magazine.length) return false;
    
    let map = new Map();
    
    for(let i=0; i<ransomNote.length; i++){
        map.set(ransomNote[i], map.has(ransomNote[i]) ? map.get(ransomNote[i])+1 : 1);
    }
  
    for(let i=0; i<magazine.length; i++){
        if(map.has(magazine[i])){ 
         map.set(magazine[i], map.get(magazine[i])-1);   
        }
    }
  
    for(let key of map.keys()){
        if(map.get(key) > 0) return false;
    }
    
    return true;
    
};
