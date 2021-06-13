const { assert } = require("console");

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    if(!licensePlate.length || !words.length) return "";
    let formattedLicensePlate = licensePlate.replace(/ /g, '').replace(/\d/g, '').toLowerCase().split('');
    let licensePlateLetterMap = new Map();

    for (letter of formattedLicensePlate) {
        if (licensePlateLetterMap.has(letter)) {
            licensePlateLetterMap.set(letter, licensePlateLetterMap.get(letter) + 1);
        }
        else {
            licensePlateLetterMap.set(letter, 1);
        }
    }
    let a = Array.from(licensePlateLetterMap.keys());
    let result  = words.filter(word=>{
      return  a.every(lett=> word.includes(lett) && licensePlateLetterMap.get(lett)<= countLetter(lett,word))
    })
    result = result.sort((r1,r2)=>r1.length-r2.length);
    return result[0];   
};
/**
 * @param {string} letter
 * @param {string} word
 */
function countLetter(letter, word) {
    let count = 0;
    for (let lett of word.split('')) {
        if (lett == letter) count++;
    }
    return count;
};

const x = shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]);

//console.log('x:::',x);

// blank licensePlate
assert(shortestCompletingWord("",["a","abc","acb"]) == "");

// blank word array
assert(shortestCompletingWord("1s3 PSt",[])=="");

// both licensePlate & word Array are blank
assert(shortestCompletingWord("",[]) == "");

