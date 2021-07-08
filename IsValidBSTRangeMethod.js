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
var isValidBST = function(root) {
    let low = null;
    let high = null;
    return validate(root, low, high);
};
function validate(root, low, high){
    if(root == null) return true;
    if( (low != null && root.val<=low) || (high != null &&  root.val>=high) ){
        return false
    }
   return validate(root.left, low, root.val) && validate(root.right, root.val, high)
