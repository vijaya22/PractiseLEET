/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if(preorder.length == 0) return null;
    let start = new TreeNode(preorder[0]);
    let root = start;
    let deque = [];
    deque.push(start);
    for(let i=1; i<preorder.length; i++){
        let node = deque[deque.length-1];
        let child = new TreeNode(preorder[i]);
        while(deque.length && deque[deque.length-1].val < child.val){
              node = deque.pop();
        }
        if(node.val < child.val) node.right = child;
        else node.left = child;
        
        deque.push(child);
        
    }
    return root
};
