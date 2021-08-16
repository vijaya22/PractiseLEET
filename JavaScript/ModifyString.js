const { assert } = require("console");

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    for(let i = 0;i<s.length;i++){
        let qPos = s.indexOf('?');
        //call function to find replacement char and replace question mark
        if(qPos != -1){
            const replaceAlphabet = findReplacingAlphabet(s,qPos)
            s  = replaceAtIndex(qPos,replaceAlphabet,s);
        }
        else{
            return s;
        }
    }
    return s;
};

function findReplacingAlphabet(string,position){
    let leftChar = position-1 != -1 ? string[position-1]: ''
    let rightChar = position+1 != string.length ? string[position+1] : ''
    let resChar = '';
    for(let i =97;i<123;i++){
        let alphabet = String.fromCharCode(i);
        if(leftChar != alphabet && rightChar != alphabet){
            resChar = alphabet;
            break;
        }
    }
    return resChar;
};

var replaceAtIndex = function(index, replacement,string) {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length);
}

//blank string - 0 length
assert(modifyString("")=="")

// good flow
assert(modifyString("a?c")=="abc")

// all question characters 
assert(modifyString("??")=="ab")

