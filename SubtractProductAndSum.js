const { assert } = require("console");

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    if (n == 0) return 0;
    let numArr =  String (n).split('');
    let product = numArr.reduce((a,b)=>(+a)*(+b));;
    let sum = numArr.reduce((a,b)=>(+a)+(+b));
    return product-sum;
};

// n = 0
assert(subtractProductAndSum(0) == 0);

// n is large
//assert(subtractProductAndSum(3124823433784637));

// good flow
assert(subtractProductAndSum(4421)== 21);
