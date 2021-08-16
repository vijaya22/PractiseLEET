/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let vowelArr = ['a','e','i','o','u'];
    let result ='';
    s.split('').forEach(char=>{
        if(!vowelArr.includes(char)){
             result+=char;
        }
    })
    return result;
};
