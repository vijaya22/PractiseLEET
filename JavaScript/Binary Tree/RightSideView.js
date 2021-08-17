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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // using two queues
    // time complexity = O(n)
    // space complexity = o(d) d = diameter of tree
    if(!root) return [];
    let nextLevel= [];
    let currLevel = [];
    nextLevel.push(root);
    let result = [];
    let node = null;
    while(nextLevel.length){
        currLevel = [...nextLevel];

        nextLevel = [];
      
        while(currLevel.length){
            node = currLevel.shift();
            if(node.left) nextLevel.push(node.left);
            if(node.right) nextLevel.push(node.right);
        }
      
        result.push(node.val);
    }
    return result;
    
};
