/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // sieve of erathoneses
    // time complexity - O(sqrt(n) log (log n))
    // space compleixty - O(n)
    if(n<=2) return 0;
    
    let numbers = new Array(n).fill(false);
    
    for(let i=2; i<= Math.floor(Math.sqrt(n)); i++){
        if(!numbers[i]){
            for(let j = i*i; j<n; j=j+i){
                numbers[j] = true;
            }
        }
    }
    
    let numberOfPrimes = 0;
    for(let i=2; i<n; i++){
        if(!numbers[i]) numberOfPrimes++;
    }
    return numberOfPrimes;
    
};