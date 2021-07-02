/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = Array(k).fill(null);
    this.capacity = k;
    this.head = 0;
    this.count = 0;
  //  return this.queue.length; 
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull() == true) return false;
    let tail = (this.head+this.count)%this.capacity;
    this.queue[tail] = value;
    this.count++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty() == true){
        return false;
    }
    this.count--;
    this.head = (this.head+1) % this.capacity;
    
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) return -1;
    let tail = (this.head + this.count - 1) % this.capacity;
    return this.queue[tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.count == 0 ? true : false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.count == this.capacity ? true : false;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
