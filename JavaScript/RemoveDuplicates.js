/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    s=s.split('');
    let stack =[];
    for(let i=0;i<s.length;i++){
        if(i != 0 && s[i]===s[i-1]){
            s.splice(i-1,2);
            i= i-2;
        }  
    }
    return s.join('');
    
};
