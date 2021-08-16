const assert = require("assert");

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordsInOrder = s.trim().split(/\s+/);
    return wordsInOrder.reverse().join(" ");
};
const x = reverseWords(" sky blue ");
console.log('x:::',x);

// blank string
assert(reverseWords("")=="");

// lots of spaces
assert(reverseWords("      ") == "");

// spaces at start and end of string
assert(reverseWords(" hi i am a new person ") =="person new a am i hi");

// more than one space between words
assert(reverseWords("i  new    to this") == "this to new i");

// special character in string
assert(reverseWords("hi i am sky, nice to meet you all.")=="all. you meet to nice sky, am i hi");

// good flow
assert(reverseWords("one two three")=="three two one");
