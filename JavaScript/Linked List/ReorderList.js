/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // time complexity - O(n)
    // space complexity - O(1)
    if(!head) return null;
    // find middle
    let middle = findMiddle(head);
    // reverse second half of list
    let reversed = reverse(middle);
    // merge two sorted list
    return merge(head, reversed);
    
};
function findMiddle(root){
    let slow  = root;
    let fast = root;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
function reverse(root){
    let prev = null
    let curr = root;
    
    while(curr){
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}
function merge(l1, l2){
    let sentinel = l1;
    l1=l1.next;
    while(l2.next){
        sentinel.next = l2;
        l2 = l2.next;
        sentinel = sentinel.next;
        sentinel.next = l1;
        l1 = l1.next;
        sentinel = sentinel.next;
    }
    return sentinel.next;
}
