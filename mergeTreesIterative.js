/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // iterative approach - by using stack
    
    // time complexity - O(n)
    // merge complexity  - O(n)
    if(!root1 && !root2) return null;
    if(!root1) return root2;
    if(!root2) return root1;
    
    let stack =[];
    stack.push([root1,root2]);

    while(stack.length){
        let node = stack.pop();
        if(node[0]== null || node[1] == null) continue;
        node[0].val = node[0].val+node[1].val;
        if(node[0].left == null){
            node[0].left = node[1].left;
        } else stack.push([node[0].left, node[1].left]);
        if(node[0].right == null){
            node[0].right = node[1].right;
        } else stack.push([node[0].right, node[1].right]);
    }
    return root1;
};
