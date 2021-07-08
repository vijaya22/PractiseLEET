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
let prev ;
var isValidBST = function(root) {
    prev = null;
    return inorder(root);
};
function inorder(root){
    if(root == null) return true;
    if(!inorder(root.left)) return false;
    if(prev != null && root.val <= prev) return false;
    prev= root.val;
    return inorder(root.right);
}
