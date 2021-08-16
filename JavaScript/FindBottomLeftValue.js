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
var findBottomLeftValue = function(root) {
    //time complexity - O(N)
    //space complexity - O(D) - DIAMETER
    if(!root) return ;
    let queue = [root];
    let result;
    while(queue.length){
        let currLevelLen = queue.length;
        let node;
        for(let i=0;i<currLevelLen; i++){
            node = queue.shift();
            if(i==0){
                result = node.val;
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
};
