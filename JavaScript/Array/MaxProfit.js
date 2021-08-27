/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices){
    // time complexity - O(n)
    // space complexity - O(1)
    let minPrice = Number.POSITIVE_INFINITY;
    let mProfit = 0;
    for(let i=0; i<prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }
        else if(prices[i] - minPrice > mProfit){
            mProfit = prices[i] - minPrice;
        }
    }
    return mProfit;
}