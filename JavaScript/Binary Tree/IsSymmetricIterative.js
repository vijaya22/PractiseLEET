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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // time complexity - O(n)
    // space complexity- O(n)
    let queue = [];
    queue.push(root);
    queue.push(root);
    while(queue.length){
        let t1 = queue.shift();
        let t2 = queue.shift();
        
        if(t1 == null && t2 == null) continue;
        if(t1 == null || t2 == null) return false;
        if(t1.val != t2.val) return false;
        
        queue.push(t1.left);
        queue.push(t2.right);
        queue.push(t1.right);
        queue.push(t2.left);
    }
    return true;
};
