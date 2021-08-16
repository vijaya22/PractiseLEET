const assert = require("assert");

/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
    let numArr = number.replace(/-/g, '').replace(/ /g, '').split('')
    let res = ''
    while (numArr.length >= 4) {
        if (numArr.length == 4) {
            res = res + numArr.splice(0, 2).join('') + '-' + numArr.splice(0, 2).join('')
        }
        else {
            res = res + numArr.splice(0, 3).join('') + '-'
        }
    }
    res = res + numArr.join('')
    console.log('res::', res)
    return res
};

const x = reformatNumber('1234-56-5 34');

// no special chars
assert(reformatNumber('123456') == '123-456')

// blank string
assert(reformatNumber('') == '');

// only special chars
assert(reformatNumber('- - - - ') == '');

// good flow 
assert(reformatNumber('123- 45- 9 8') == '123-45-98');
