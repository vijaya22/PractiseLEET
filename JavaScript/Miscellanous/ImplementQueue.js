/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    //  push to top, peek/pop from top, size, and is empty
      this.stack1 = [];
      this.stack2 = [];
  };
  
  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
  MyQueue.prototype.push = function(x) {
      if(this.stack1.length){
          const stack1Length = this.stack1.length;
          for(let i=0;i < stack1Length;i++) {
              this.stack2.push(this.stack1.pop())
          }
          
          this.stack1.push(x);
          const stack2Length = this.stack2.length;
          for(let i=0;i < stack2Length;i++) {
              this.stack1.push(this.stack2.pop())
          }
      }else {
          this.stack1.push(x)
      }
  };
  
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  MyQueue.prototype.pop = function() {
      return this.stack1.pop();
  };
  
  /**
   * Get the front element.
   * @return {number}
   */
  MyQueue.prototype.peek = function() {
      return this.stack1[this.stack1.length-1];
  };
  
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  MyQueue.prototype.empty = function() {
      return this.stack1.length == 0;
  };
  
  /** 
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */