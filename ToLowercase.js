/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let letterMap = new Map();
    let result="";
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0;i<26;i++){
        letterMap.set(upper.charAt(i),lower.charAt(i)); 
    }
    for(let i=0;i<s.length;i++){
        if(letterMap.has(s.charAt(i))){
            result= result+letterMap.get(s.charAt(i))
        }
        else {result = result + s.charAt(i);}
    }
    return result;
};
