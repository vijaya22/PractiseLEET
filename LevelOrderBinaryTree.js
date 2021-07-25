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
let levels = [];
var levelOrder = function(root) {
    // bfs with a queue
    // time - O(n)
    // space - O(n)
    if(!root) return [];
    
    let queue =[];
    let output = []; 
    queue.push(root);
    
    while(queue.length){
        let len = queue.length;
        let level =[];
        for(let i=0;i<len;i++){
            let currNode = queue.shift();
            if(currNode.left){
                queue.push(currNode.left);
            }
            if(currNode.right){
                queue.push(currNode.right);
            }
            level.push(currNode.val);
        }
        output.push(level);
    }
    return output;  
};
