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
 * @return {number[][]}
 */
var  levelOrder = function(root) {
    // return bottom up level order traversal 
    // bfs with queue
    // time complexity - O(n)
    // space comeplexity- O(n)
    if(!root) return [];
    let queue =[];
    let output = [];
    queue.push(root);
    
    while(queue.length){
        let len = queue.length;
        let levelElements = [];
        for(let i=0;i<len;i++){
            let currNode = queue.shift();
            if(currNode.left){
                queue.push(currNode.left);
            }
            if(currNode.right){
                queue.push(currNode.right);
            }
            levelElements.push(currNode.val);
        }
        output.unshift(levelElements);
    }
    return output;
};
