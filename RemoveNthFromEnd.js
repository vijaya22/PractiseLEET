/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // one pass algorithm
 
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    
    for(let i=1; i<=n+1; i++){
         first = first.next;
    }
    
    while(first != null){
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
   
};
