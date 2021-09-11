/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefixSums = new Array(w.length).fill(0);
    let prefixSum = 0;
    for(let i=0; i<w.length; i++){
        prefixSum += w[i];
        this.prefixSums[i] = prefixSum;
    }
    this.totalSum = prefixSum;
    
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    // run a binary search to find the target zone
    // time compexity - O(n)
    // space complexity. - O(n)
    let target = this.totalSum * Math.random();
    let low = 0;
    let high = this.prefixSums.length;
    while(low<high){
        let mid = Math.floor(low + (high-low)/2);
        if(target > this.prefixSums[mid]){
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return low;
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
