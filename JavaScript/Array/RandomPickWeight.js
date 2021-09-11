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
    // run a linear search to find the target zone
    // time compexity - O(n)
    // space complexity. - O(n)
    let target = this.totalSum * Math.random();
    for(let i=0; i<this.prefixSums.length; i++){
        if(target < this.prefixSums[i]) return i;
    }
    return this.prefixSums.length-1;
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
