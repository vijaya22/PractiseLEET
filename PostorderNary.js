/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    
    // iterative approach
    // time complexity - O(n)
    // space complexity - O(n)
    let stack = [];
    let output = [];
    if(!root) return output;
    stack.push(root);
    
    while(stack.length){
        let node = stack.pop();
        output.unshift(node.val);
        for(let item of node.children){
            if(item!=null){
                stack.push(item);
            }
        }
    }
    return output;
};
