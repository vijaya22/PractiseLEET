/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    // start traversing s
    for(let i=0; i<s.length; i++){
        if(s[i] == ']'){
            let repeatString = "";
            while(stack[stack.length-1] != '['){
                repeatString = repeatString + stack.pop();
            }
            stack.pop();
            let base =1;
            let k = 0;
            while(stack.length && stack[stack.length-1].match(/\d+/)){
                k = k+ (stack.pop() -'0')*base;
                base *=10;
            }
            
            while(k != 0){
                for(let j = repeatString.length-1; j>=0;j--){
                    stack.push(repeatString[j]);
                }
                k--;
            }
        }
        else{
            stack.push(s[i]);
        }
    }
    return stack.join('');
   
};
