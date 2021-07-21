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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
    // insert the nodes of the tree in pre order form in an array
    // iterate the array and then link the nodes in the arr to the right
    
    if(!root) return [];
    let res = [];
    preorderTraversal(root, res);
    let curr = res[0];
    let head = curr;
    for(let i=1;i<res.length;i++){
        curr.right = res[i];
        curr.left = null;
        curr = curr.right;
    }
    curr.right = null;
    return head;
};

function preorderTraversal(root,res){
    if(!root) return;
    res.push(root);
    preorderTraversal(root.left, res);
    preorderTraversal(root.right, res);
}
