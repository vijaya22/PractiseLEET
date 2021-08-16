/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for(let st of strs){
        let stArr = st.toLowerCase().split('');
        stArr = stArr.sort().join('');
        
        if(map.has(stArr)){
            map.set(stArr,map.get(stArr).concat(st));
        }
        else{
            map.set(stArr,[st]);
        }
    }
   
    return Array.from(map.values());
};
