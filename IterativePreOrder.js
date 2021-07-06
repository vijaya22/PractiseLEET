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
var preorderTraversal = function(root) {
    let res = [];
    if(!root) return res;
    let node = null;
    let queue = [root];
    while(queue.length){
        node = queue.pop();
        res.push(node.val);
        if(node.right) queue.push(node.right);
        if(node.left) queue.push(node.left);
    }
    return res;
};
