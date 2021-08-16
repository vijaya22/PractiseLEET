let List = function(key,val){
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.map = new Map();
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
   var node = this.map[key];
  if (node) {
    this.remove(node);
    this.insert(node.key, node.val);
    return node.val;
  } else {
    return -1;
  }
};
LRUCache.prototype.remove = function(node){
   var prev = node.prev;
  var next = node.next;
  if (next) next.prev = prev;
  if (prev) prev.next = next;
  if (this.head === node) this.head = next;
  if (this.tail === node) this.tail = prev;
  delete this.map[node.key];
}
LRUCache.prototype.insert = function(key, value){
    let node = new List(key, value);
  if (!this.tail) {
    this.tail = node;
    this.head = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.map[key] = node;
}
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map[key]) {
    this.remove(this.map[key]);
    this.insert(key, value);
  } else {
    if (this.length === this.capacity) {
      this.remove(this.head);
      this.insert(key, value);
    } else {
      this.insert(key, value);
      this.length++;
    }
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
