/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let str = s.split('');
    for(let br of str){
        if(br == ')' || br==']' || br=='}'){
            let open = stack[stack.length-1];
            if(ifSameclosing(open,br)){
                stack.pop();
            }
            else return false;
        }
        else {
            stack.push(br);
            
        }
    }
    if(stack.length==0) return true;
    else return false;
    
};
function ifSameclosing(open, close){
    if(open == '('){
       if(close == ')') return true;
        else return false;
    }
    else if(open == '['){
        if(close == ']') return true;
        else return false;
    }
    else if(open == '{'){
        if(close == '}') return true;
        else return false;
    }
        
    
}
