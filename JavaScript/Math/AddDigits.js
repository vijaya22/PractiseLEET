/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // time complexity - O(n)
    // space complexity - O(1)
    if(num>=0 && num<=9) return num;
    let sum = 0;
    while(num>0){
        let digit = num%10;
        num = Math.floor(num/10);
        sum = sum+ digit;
        if(num == 0 && sum > 9){
            num = sum;
            sum = 0;
        }
    }
    return sum;
};
