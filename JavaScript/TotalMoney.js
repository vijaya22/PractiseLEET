const { assert } = require("console");

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    if(n <= 0) return 0;
    let sum  = []; 
    let mondaySum = 0
    for(let i=0;i<n;i++){
        if(i % 7 == 0){
            mondaySum++;
            sum.push(mondaySum);
        }
        else{
            sum.push(sum[i-1]+1);
        } 
    }
    return sum.reduce((a,b)=>a+b);
};
const x = totalMoney(20)
console.log('x:::',x);

// 0th day 
assert(totalMoney(0)==0)

// negative days
assert(totalMoney(-3)==0)

// good flow
assert(totalMoney(20) == 96)
