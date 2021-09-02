/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // in place 
    // time complexity - O(n)
    // space complexity - O(1)
    if(!chars.length) return 0;
    let currChar = chars[0];
    let count = 0;
    let j = 0;
    
    for(let i=0; i<=chars.length; i++){
        if(currChar == chars[i]){
            count++;
        }
        else{
            chars[j] = currChar;
            j++;
            currChar = chars[i];
            if(count>1){
                count = (""+count).split('');
                for(let k=0; k<count.length; k++){
                    chars[j] = count[k];
                    j++;
                }
                
            }
            count = 1;
        }
    }
    return j;
};
