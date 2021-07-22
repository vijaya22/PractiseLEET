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
    // using single queue
    // adding null after every level
    // time complexity = o(n)
    // space complexity = o(h)  h is height
    
    if(!root) return [];
    let queue = [root];
    let res= [];
    while(queue.length){
        let levelLength = queue.length;
        
        for(let i=0;i<levelLength; i++){
            let node = queue.shift();
            
            if(i == levelLength-1){
                res.push(node.val);
            }
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
    return res;
};
