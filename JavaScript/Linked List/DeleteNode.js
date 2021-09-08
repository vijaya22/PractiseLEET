/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // so you are basically deleting the next node
    // by replacing value of next into current/given node
    // deleting the next node
    node.val = node.next.val;
    node.next = node.next.next
};
