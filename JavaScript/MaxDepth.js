/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack =[];
    let max = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] == '('){
            stack.push(s[i]);
        }
        if(s[i] == ')' && stack.length){
            max = Math.max(max, stack.length);
            stack.pop();
        }
    }
    return max;
};
