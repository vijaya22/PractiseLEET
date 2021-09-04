/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s.length) return true;
    let map = new Map();
    map.set(')','(');
    map.set('}','{');
    map.set(']','[');
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            if(stack.length && stack[stack.length-1] == map.get(s[i])){
                stack.pop();
            }else return false;
        }
        else stack.push(s[i]);
    }
    return stack.length == 0;
};
