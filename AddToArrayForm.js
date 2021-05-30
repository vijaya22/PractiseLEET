/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let numLength = num.length
    let numValue = 0n;
    for(let i = 0 ;i<numLength;i++){
        numValue = (numValue*10n)+ BigInt(num[i]);
    }
    let sum = numValue+BigInt(k)+'';
    let result = sum.split('')
    return result;
};
