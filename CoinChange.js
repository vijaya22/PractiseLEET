/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(amount+1);
    dp[0] = 0;
    console.log('dp:::',dp);
    for(let i = 1; i<=amount; i++ ){
        for(let coin of coins){
            if(i-coin >= 0){
                dp[i] = Math.min(dp[i], 1+dp[i - coin]) 
            }
        }
    }
    console.log('dp::',dp);
    console.log('dp::',dp[amount]);
    if(dp[amount] == amount+1) return -1;
    else return dp[amount];
};
