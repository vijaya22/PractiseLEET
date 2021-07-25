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
var zigzagLevelOrder = function(root) {
    // bfs with a queue
    // time complexity - O(n)
    // space complexity -O(n)
    if(!root) return [];
    let queue= [];
    let output = [];
    queue.push(root);
    let left = 1;
    while(queue.length){
        let len = queue.length;
        let level = [];
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
        if(left == -1){
            console.log('in here:',level)
            level.reverse();
            left = 1;
        }
        else if(left == 1){
            left = -1;
        }
        output.push(level);
    }
    return output;
};
