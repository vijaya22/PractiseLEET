/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    // use stack
    // time complexity -O(n)
    // space complexity - O(1)
    
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(/[a-zA-Z]/.test(s[i])){     
            stack.push(s[i]);
        }
    }

    let res= "";
    for(let char of s){
        if(!/[a-zA-Z]/.test(char)){
            res = res+char;
        }
        else res = res+stack.pop();
    }
    return res;
};
