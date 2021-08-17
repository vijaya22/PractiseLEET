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
 * @return {number}
 */
var goodNodes = function(root) {
    // bfs with a queue - iterative
    // time complexity -O(n)
    // space complexity -O(n)
    let goodNode = 0;
    if(!root) return goodNode;
    let queue = [];
    queue.push([root, Number.NEGATIVE_INFINITY]);
    while(queue.length){
        let curr = queue.shift();
        let maxSoFar = curr[1];
        if(maxSoFar <= curr[0].val){
            goodNode++;
        }
        if(curr[0].right){
            queue.push([curr[0].right, Math.max(curr[0].val, maxSoFar)]);
        }
        if(curr[0].left){
            queue.push([curr[0].left, Math.max(curr[0].val, maxSoFar)]);
        }
    }
    return goodNode;
};
