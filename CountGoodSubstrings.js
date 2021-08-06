/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    // time compexity - o(n2)
    let count = 0;
    for(let i=0;i<s.length-2;i++){
        let sub = s.substr(i,3);   
        if(!inValidString(sub)){
            count++;
        }
    }
    return count;
};
function inValidString(s){
    // check whether string contains duplicate or not
    let map = new Map();
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            return true;
        }
        else{
            map.set(s[i],1);
        }
    }
    return false;
}
