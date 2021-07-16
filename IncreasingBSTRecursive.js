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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
   let values = [];
    // get inorder traversal of the tree
    inorder(root,values);
    // create a new node or tree with value 0
    let result = new TreeNode(0);
    // create a new variable pointing to the newly created tree node
    let current = result;
    // iterate the inorder traversal array
    // and add new nodes only to the right child
    for(let val of values){
        current.right = new TreeNode(val);
        current = current.right;
    }
    // as you started with 0, the result tree has root.right
    return result.right;
    
};
function inorder(node, values){
    if(!node) return null;
    inorder(node.left,values);
    values.push(node.val);
    inorder(node.right,values);
}
