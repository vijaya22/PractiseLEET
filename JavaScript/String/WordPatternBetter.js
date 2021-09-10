/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // one index hash map
    // time complexity  - O(n)
    // space complexity - O(m) m = unique words in s
    let mapIndex = new Map();
    let words = s.split(" ");
    if(pattern.length != words.length) return false;
    for(let i=0; i< words.length; i++){
        let c = pattern[i]+"_char";
        let w = words[i]+"_word";
        
        if(!mapIndex.has(c)){
            mapIndex.set(c, i);
        }
        if(!mapIndex.has(w)){
            mapIndex.set(w,i);
        }
        if(mapIndex.get(c) != mapIndex.get(w)) return false;
    }
    return true;
    
};
