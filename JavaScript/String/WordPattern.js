/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // two maps
    // time complexity - O(n)
    // space complexity - O(m) m = unique words in s
    let charMap = new Map();
    let wordMap = new Map();
    let words = s.split(" ");
    if(words.length != pattern.length) return false;
    
    for(let i=0; i< words.length; i++){
        let c = pattern[i];
        let w = words[i];
        if(!charMap.has(c)){
            if(wordMap.has(w)){
                return false;
            }
            else {
                charMap.set(c,w);
                wordMap.set(w,c);
            }
        }
        else{
            let mappedWord = charMap.get(c);
            if(mappedWord != w) return false;
        }
    }
    return true;
    
};
