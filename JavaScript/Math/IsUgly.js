/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    // find prime factors of a number
    // then match if they are 2,3 or 5
    if(n<=0) return false;
    if(n==1) return true;
    if(n<2) return true;
    let primes = new Set();
    
    while(n % 2 == 0){
        primes.add(2);
        n = Math.floor(n/2);
    }
    
    for(let i=3; i<= Math.floor(Math.sqrt(n)); i=i+2){
        while(n%i == 0){
            primes.add(i);
            n = Math.floor(n/i);
        }
    }
    if(n>2) primes.add(n);

    
    let primesArr = Array.from(primes);
    
    let res = primesArr.find(factor=> factor != 2 && factor !=3 && factor !=5) ? false : true
    return res;
    
};
