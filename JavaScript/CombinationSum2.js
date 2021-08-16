/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort();
    function backtrack(tempList, currentSum, start){
        if(currentSum == target){
            result.push(tempList);
        }
        if(currentSum <= target){
             for(let i=start; i< candidates.length; i++){
                if(i>start && candidates[i] == candidates[i-1]){
                    continue;
                }
                backtrack([...tempList, candidates[i]], currentSum+candidates[i], i+1)
            }
        }
    }
    backtrack([], 0, 0);
    return result;
};
