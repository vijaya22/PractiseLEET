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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  // serialize tree -- convert into a string
  // push it into a map and then check it if its count == 2 or not
    let map = new Map();
    let output = [];
    serialize(root, map, output);
    return output;
};
function serialize(node, map, output){
    if(!node) return 'x';
    let id = node.val + ','+serialize(node.left, map, output) + ','+serialize(node.right, map, output);
    map.set(id, (map.get(id)||0)+1);
    if(map.get(id) == 2) output.push(node);
    return id;
}
