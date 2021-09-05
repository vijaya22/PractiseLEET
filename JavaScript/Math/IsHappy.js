/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // time complexity - O(log n)
    // space complexity - O(log n)
   let seen = new Set();
    while( n!=1 && !seen.has(n)){
        seen.add(n);
        n = getNext(n);
    }
    return n==1;
    
};
function getNext(n){
    let total = 0;
    while(n>0){
        let digit = n % 10;
        n = Math.floor(n/10);
        total = total + digit * digit;
    }
    return total;
}
