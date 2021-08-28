class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function arrayToBST(nums) {
    // time complexity -O(n)
    // space complexity -O(n)
    return helper(0, nums.length - 1);
}
function helper(left, right) {
    if (left > right) return null;
    let rootIndex = Math.floor((left + right) / 2);
    let root = new TreeNode(rootIndex);
    root.left = helper(left, rootIndex - 1);
    root.right = helper(rootIndex + 1, right);
    return root;
}