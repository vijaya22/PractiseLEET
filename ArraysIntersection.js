/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    if(!arr1.length || !arr2.length || !arr3.length) return [];
    let arr1Set = new Set(arr1);
    let arr2Set = new Set(arr2);
    let arr3Set = new Set(arr3);
    let result = [];
    for(let arr1 of arr1Set){
        if(arr2Set.has(arr1) && arr3Set.has(arr1)){
            result.push(arr1);
        }
    }
    return result;
};

const x = arraysIntersection([1,2,3,4,5],[1,2,5,7,9],[1,3,4,5,8]);
console.log('x:::: ',x);
