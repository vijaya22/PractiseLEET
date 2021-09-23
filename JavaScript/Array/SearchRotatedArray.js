/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length;
    let rotationIndex = findRotationIndex(0, n-1, nums);
    
    if(nums[rotationIndex] == target){
        return rotationIndex;
    }
    if(rotationIndex == 0){
        return binarySearch(0, n-1, nums,target);
    }
    if(target < nums[0]){
        return binarySearch(rotationIndex, n-1, nums, target);
    }
    
    return binarySearch(0, rotationIndex, nums, target);
    
};

function binarySearch(left, right, nums, target){
    while(left <= right){
        let pivot = Math.floor((left + right) / 2);
        if(nums[pivot] == target){
            return pivot;
        }
        else if(nums[pivot] < target){
            left = pivot+1;
        }
        else right = pivot-1;
    }
    return -1;
};

function findRotationIndex(left, right, nums){
    if(nums[left] < nums[right]) return 0;
    
    while(left <= right){
        let pivot = Math.floor((left+right)/2);
        if(nums[pivot] > nums[pivot+1]) return pivot+1;
        else if(nums[pivot] < nums[left]) right = pivot -1;
        else left = pivot+1;
    }
    return 0;
}
