/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 1. first approach is sort
    // time complexity - O(nlog n)
    // space complexity - O(1)
    
    // 2. use a hashtable or hashmap to keep a count of letters
    // for s, increment the count
    // for t, decrement the count
    // iterate over map keys/ array 
    // if count != 0 then return false;
    // otherwise true
    // time complexity - O(n)
    // space complexity - O(1)  - it is constant as total engligh alphabets are 26
    if(s.length != t.length) return false;
    
    
    let map = new Map();
    for(let i=0; i<s.length; i++){
        map.set(s[i], map.has(s[i]) ? map.get(s[i])+1 : 1);
        map.set(t[i], map.has(t[i]) ? map.get(t[i])-1 : -1);
    }
  
    for( let key of map.keys()){
        if(map.get(key) != 0) return false;
    }
    return true;
    
};
