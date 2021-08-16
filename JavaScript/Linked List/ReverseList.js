/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // time complexity = O(n)
    // space complexity O(1)
    // iterative approach
    let prev = null; 
    let current = head; 
    let nextTemp = null; 
    while(current != null){ 
        nextTemp = current.next; 
        current.next = prev; 
        prev = current;
        current = nextTemp;
    }
    return prev;
};
