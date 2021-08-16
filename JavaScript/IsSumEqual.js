const { assert } = require("console");

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    if(firstWord == "" || secondWord == "" || targetWord == "") return false
    let alphabetMap = new Map();
    for(let i =0; i<10;i++){
        alphabetMap.set(String.fromCharCode(i+97),i);
    }
    let firstWordValue = countWordValue(firstWord,alphabetMap);
    let secondWordValue = countWordValue(secondWord,alphabetMap);
    let targetWordValue = countWordValue(targetWord,alphabetMap);
    if(firstWordValue + secondWordValue == targetWordValue) return true;
    else return false;

};
/**
 * @param {string} word 
 * @param {array} alphabetMap
 */
var countWordValue = function(word, alphabetMap){
    let numericalValue = '';
    word.split('').forEach(letter=>{
        numericalValue += alphabetMap.get(letter);
    })
    return +numericalValue;
}

// if first word is blank
assert(isSumEqual("","a","a") == false)

// if second word is blank
assert(isSumEqual("a","","a") == false)

// if target word is blank
assert(isSumEqual("a","b","") == false);

// if both are equal  - should return sum
assert(isSumEqual("b","b","c") == true)

// good flow
assert(isSumEqual("acb","cba","cdb") == true)
