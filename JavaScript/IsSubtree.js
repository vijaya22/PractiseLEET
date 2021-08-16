/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // root or its child contains subroot
    // then check recursively if they are equal or not
    if(!root && !subRoot) return true;
    if(!root || !subRoot) return false;
    return isEqual(root,subRoot) || isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
};

function isEqual(node1, node2){
    if(!node1 && !node2) return true;
    if(!node1 || !node2) return false;
    return (node1.val == node2.val) && isEqual(node1.left, node2.left) && isEqual(node1.right, node2.right)
    
}
