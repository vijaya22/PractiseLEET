var assert = require('assert');

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let mergedWord = '';
    while (word1.length > 0 || word2.length > 0) {
        if (word1.length) {
            mergedWord = mergedWord.concat(word1.charAt(0));
            word1 = word1.slice(1);
        }
        if (word2.length) {
            mergedWord = mergedWord.concat(word2.charAt(0));
            word2 = word2.slice(1);
        }
    }
    return mergedWord;
};

//blank strings
assert(mergeAlternately("", "") == "");

// any one string is blank
assert(mergeAlternately("", "abc") == "abc");

assert(mergeAlternately("abc", "") == "abc");

// good flow
assert(mergeAlternately("abc", "def") == "adbecf");
