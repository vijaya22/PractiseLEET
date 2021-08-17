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
 * @param {number} target
 * @return {number}
 */

var  closestValue = function(root, target) {
    // time complexity - O(n)
    // space complexity - O(n)
    let inorderArr = [];
    let diff = Number.POSITIVE_INFINITY;
    let res = root.val;
    inorder(root, inorderArr);
    for(let i =0; i<inorderArr.length; i++){
        if(Math.abs(target - inorderArr[i])<diff){
            res = inorderArr[i];
            diff = Math.abs(target - inorderArr[i]);
        }
    }
    return res;
};
function inorder(root,res){
    if(!root) return;
    if(root.left) inorder(root.left, res);
    res.push(root.val);
    if(root.right) inorder(root.right, res);
}
