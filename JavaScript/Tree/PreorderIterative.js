/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    // time complexity = O(n)
    // space complexity = O(n)
    if(!root) return [];
    let stack = [];
    let output = [];
    stack.push(root);
    
    while(stack.length){
        let node = stack.pop();
        output.push(node.val);
        node.children.reverse();
        for(let item of node.children){
            if(item!=null){
                stack.push(item);
            }
        }
    }
    return output;
    
};
