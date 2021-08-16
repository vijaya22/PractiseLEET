/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = new Map();
    for(let i=0; i<numbers.length; i++){
        let comp = target-numbers[i];
        if(map.has(comp)){
            return [i+1,numbers.indexOf(comp)+1].sort((a,b)=>a-b);
        }
        else map.set(numbers[i],i);
    }
    return [-1,-1];
};
