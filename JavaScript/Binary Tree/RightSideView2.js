/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    // using single queue
    // adding null after every level
    // time complexity = o(n)
    // space complexity = o(d)  d is diameter
    if(root == null) return [];
    let queue = [];
    queue.push(root)
    queue.push(null);
    let prev = root;
    let curr = root;
    
    let res = [];
    
    while(queue.length){
        prev = curr;
        curr = queue.shift();
        while(curr != null){
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        
            prev= curr;
            curr = queue.shift();
          }
        res.push(prev.val);
        if(queue.length) queue.push(null);
    }
    return res;
    
};
