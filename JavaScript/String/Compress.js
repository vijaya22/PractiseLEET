/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // used new array to give compressed string
    // time complexity - O(n)
    // space complexity - O(n)
    let currCount = 0;
    let currChar = chars[0];
    let compressedString = [];
    
    for(let i=0; i<chars.length; i++){
        if(currChar == chars[i]){
            currCount ++;
        }
        else{
            compressedString.push(currChar);
            currChar = chars[i];
            if(currCount>1){
              compressedString.push(""+currCount);
            }
            currCount = 1;
        }
    }
    compressedString.push(currChar);
    currCount > 1 ? compressedString.push(currCount) : '';
    return compressedString.length;
};
