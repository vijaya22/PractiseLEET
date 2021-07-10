/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    // manipulating the last set bit 
    // P(x) = P(x & (x-1)) + 1
    let res= [];
    res[0] = 0;
    for(let i=1;i<=n;i++){
        res[i] = res[i & (i-1)] + 1;
    }
    return res
};
