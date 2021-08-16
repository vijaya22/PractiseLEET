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
 * @return {string}
 */
var tree2str = function(root) {
   return buildString(root);
};
function buildString(node){
    if(!node) return '';
    if(!node.left && !node.right) return ''+ node.val;
    let left  = '(' + buildString(node.left) + ')';
    let right = node.right? '(' + buildString(node.right) + ')':'';
    
    return node.val + left + right;

}
