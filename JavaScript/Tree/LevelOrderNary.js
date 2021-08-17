/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var  levelOrder = function(root) {
    // bfs using a queue
    // time complexity - O(n)
    // space complaxity - O(n)
    if(root == null) return [];
    let output = [];
    
    let queue = [];
    
    queue.push(root);
    
    while(queue.length>0){
        let size = queue.length;
        let level = [];
        for(let i=0;i<size;i++){
            let currNode = queue.shift();
            if(currNode.children){
                for(let j=0;j<currNode.children.length;j++){
                    queue.push(currNode.children[j]);
                }
            }
            level.push(currNode.val);
        }
        output.push(level);
        
    }
    return output;
    
};
