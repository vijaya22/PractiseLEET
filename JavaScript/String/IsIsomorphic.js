/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;
    let mapIndex = new Map();
    for(let i=0; i<s.length; i++){
        let a = s[i] + "_s";
        let b = t[i] + "_t";
        if(!mapIndex.has(a)){
            mapIndex.set(a, i);
        }
        if(!mapIndex.has(b)){
            mapIndex.set(b, i);
        }
        if(mapIndex.get(a) != mapIndex.get(b)) return false;
    }
    return true;
};
