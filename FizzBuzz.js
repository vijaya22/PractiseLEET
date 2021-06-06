/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let resultArr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0) {
            if (i % 3 == 0) {
                resultArr.push("FizzBuzz")
            }
            else {
                resultArr.push("Buzz")
            }
        }
        else if(i%3 == 0){
            resultArr.push("Fizz")
        }
        else{
            resultArr.push(""+i);
        }
    }
    return resultArr;
};
