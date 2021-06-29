/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
    let result =0;
    for(let i=0;i<=calories.length-k;i++){
        let car = calories.slice(i,i+k);
        let sum = car.reduce((c,i)=>c+i)
        if(sum<lower){
            result--;
        }
        else if(sum>upper){
            result++;
        }
        
    }
    return result;
};
