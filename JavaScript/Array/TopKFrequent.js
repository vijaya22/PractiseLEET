/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numMap = new Map();
    for(let num of nums){
        if(numMap.has(num)){
            numMap.set(num,numMap.get(num)+1);
        }
        else{
            numMap.set(num,1);
        }
    }
    let x = [...numMap.entries()].sort((a,b)=>b[1]-a[1]);
    let count = 0;
    let result = [];
    for(let item of x){
        result.push(item[0]);
        count++;
        if(count == k){
            return result;
        }
    }
    return result;  
};
