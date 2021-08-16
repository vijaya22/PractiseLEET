/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates2 = function(s, k) {
    s=s.split('');
    let stack =[];
    for(let i=0; i<s.length; i++){
        if(i==0 || s[i] != s[i-1]){
            stack.push(1);
        }
        if(s[i-1] == s[i]){
            stack[stack.length-1] = stack[stack.length-1] + 1;
        }
        if(stack[stack.length-1] == k){
            stack.pop();
            s.splice(i-k+1,k);
            i =i-k;
        }
    }
    return s.join('')
};
