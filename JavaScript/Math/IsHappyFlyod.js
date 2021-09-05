/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // floyd's cycle finding algorithm
    // time complexity - O(log n)
    // space complexity - O(1)
    let slow = n;
    let fast = getNext(n);
    while(fast != 1 && slow != fast){
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast ==1;
    
};
function getNext(n){
    let total = 0;
    while(n>0){
        let digit = n %10;
        n = Math.floor(n/10);
        total = total + digit * digit;
    }
    return total
}
