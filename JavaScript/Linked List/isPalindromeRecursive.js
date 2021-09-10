/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
let frontPointer;
var isPalindrome = function(head) {
    // recursive approach
    // time complexity - O(n)
    // space complexity - O(n)
    frontPointer = head;
    return recursiveCheck(head);
};
function recursiveCheck(currNode){
    if(currNode != null){
        if(!recursiveCheck(currNode.next)) return false;
        if(currNode.val != frontPointer.val) return false;
        frontPointer = frontPointer.next;
    }
    return true;
}
