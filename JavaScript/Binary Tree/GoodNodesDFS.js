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
var goodNodes = function (root) {
    // Given a binary tree root, a node X in the tree is named good 
    //if in the path from root to X there are no nodes with a value greater than X.
    // Return the number of good nodes in the binary tree.
    // dfs with a stack - iterative
    // time complexity -O(n)
    // space complexity -O(n)
    let goodNodes = 0;
    let stack = [];
    stack.push([root, Number.NEGATIVE_INFINITY]);

    while (stack.length) {
        let curr = stack.pop();
        let maxSoFar = curr[1];
        if (maxSoFar <= curr[0].val) {
            goodNodes++;
        }
        if (curr[0].left != null) {
            stack.push([curr[0].left, Math.max(curr[0].val, maxSoFar)]);
        }
        if (curr[0].right != null) {
            stack.push([curr[0].right, Math.max(curr[0].val, maxSoFar)]);
        }
    }
    return goodNodes;
};