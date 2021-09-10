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
var isPalindrome = function(head) {
    // Find the end of the first half.
    // Reverse the second half.
    // Determine whether or not there is a palindrome.
    // Restore the list.
    // Return the result.
    
    // time complexity - O(n)
    // space complexity - O(1)
    
    if(!head) return true;
    let firstHalfEnd = endOfFirstHalf(head);
    let secondHalfStart = reverseLinkedList(firstHalfEnd.next);
    
    // check whether palindrome or not
    let p1 = head;
    let p2 = secondHalfStart;
    let res = true;
    while(res && p2 != null){
        if(p1.val != p2.val) res = false;
        p1 = p1.next;
        p2 = p2.next;
    }
    
    firstHalfEnd = reverseLinkedList(secondHalfStart);
    return res;
    
};
function endOfFirstHalf(head){
    let fast = head;
    let slow = head;
    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
function reverseLinkedList(root){
   // if(!root) return null;
    let prev = null;
    let curr = root;
    while(curr != null){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}


