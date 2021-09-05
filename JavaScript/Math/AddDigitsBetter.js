/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // digitalRoot
    // time complexity - O(1)
    // space complexity - O(1)
    return num == 0 ? 0 : 1 + (num-1) % 9;
};
