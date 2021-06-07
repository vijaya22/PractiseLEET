var assert =  require('assert');
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(!stones.length) return 0;
    while(stones.length>1){
        const max = findMax(stones);
        const secondMax = findSecondMax(stones,max);
        if(stones[max] == stones[secondMax]) {
            if(stones.length>2){
                stones.splice(secondMax,1)
                stones.splice(max,1);
            }
            else{
                stones.pop();
                stones.pop()
            }
        }
        else {
            stones[max] = stones[max] - stones[secondMax];
            stones.splice(secondMax,1)
        }  
    }
    return stones.length?stones[0]:0;

};
/**
 * @param {number[]} stones
 * @return {number}
 */
function findMax(stones) {
    let maxWeight = 0;
    let maxWeightIndex = 0;
    stones.forEach((stone,i) => {
        if(stone > maxWeight) {
            maxWeight = stone;
            maxWeightIndex = i;
        }
    })
    return maxWeightIndex;
}
/**
 * @param {number[]} stones
 * @return {number}
 */
function findSecondMax(stones,maxIndex) {
    let secondMax = 0;
    let secondMaxIndex = 0;
    stones.forEach((stone,i)=>{
        if(stone>secondMax && i != maxIndex) {
            secondMax = stone;
            secondMaxIndex = i
        }
    })
    return secondMaxIndex;
}

// blank array
assert(lastStoneWeight([])==0)

// good flow
assert(lastStoneWeight([2,2]) == 0);

assert(lastStoneWeight([2, 7, 4, 1, 8, 1]) == 1)
