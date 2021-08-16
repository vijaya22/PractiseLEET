/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    // time complexity - O(n)
    // space complexity -O(1)
    if(timeSeries.length ==0) return 0; 
    let poisonedTime = 0;
    
    for(let i=0;i<timeSeries.length-1; i++){
        poisonedTime += Math.min(timeSeries[i+1] - timeSeries[i], duration);
    }
    
   
    return (poisonedTime+duration);
};
