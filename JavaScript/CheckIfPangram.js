var assert = require('assert');

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let len = sentence.length;
    if(len < 26 && typeof sentence != String) return false;
    let alphabetArr = [];
    for(let i =97;i<123;i++){
        alphabetArr.push(String.fromCharCode(i));
    }
    return alphabetArr.every(alphabet=>sentence.toLowerCase().indexOf(alphabet) != -1)
};

// not all characters - less than 25 chars
assert(checkIfPangram("leetcode")==false)

// length - 26 but not all english alphabets
assert(checkIfPangram("aabbccddeeffgghhiijjkkllmm") == false);

// if sentence contains space and special chars (full stop)
assert(checkIfPangram("he is a dog abcdefghijklmnopqrtuvwxyz.") == true)

// if sentence contains engligh alphabets
assert(checkIfPangram("abc Def ghi Jkl MnoP qrstuv Wxyz.") == true)

// if sentence is not a string
assert(checkIfPangram(['2','3']) == false)

// good flow
assert(checkIfPangram("abc def ghi jkl mnopqrstuvwxyz") == true)
