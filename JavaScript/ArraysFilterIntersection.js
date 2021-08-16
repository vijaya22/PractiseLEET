const { assert } = require("console");

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysFilterIntersection = function(arr1, arr2, arr3){
   if(!arr1.length || !arr2.length || !arr3.length) return [];
   return arr1.filter(ele => arr2.includes(ele) && arr3.includes(ele))
}

// any one array is blank
assert(JSON.stringify(arraysFilterIntersection([],[2,3],[1,3]))==JSON.stringify([]));

// all the arrays are blank
assert(JSON.stringify(arraysFilterIntersection([],[],[]))==JSON.stringify([]));
