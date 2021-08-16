/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.data = [];
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.data.push(val);
    let sliceArr = this.data.slice(-this.size);
    const sum = sliceArr.reduce((a,b)=>a+b);
    return sum/Math.min(this.data.length,this.size);
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
