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
    // iterative approach using stack
    // the nodes into a stack as we encounter
    // check the last inserted node
    // insert its right 
    // then its left
    
    if(!root) return "";
    let stack = [];
    stack.push(root);
    let visited = new Set();
    let res = "";
    while(stack.length){
        root = stack[stack.length-1];
        if(visited.has(root)){
            stack.pop();
            res +=')' ;
        }
        else {
            visited.add(root);
            res = res + "(" + root.val;
            if(root.left == null && root.right != null) res+= "()";
            if(root.right != null) stack.push(root.right);
            if(root.left != null) stack.push(root.left);
        }
    }
    return res.substring(1, res.length-1);
