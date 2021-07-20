/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    // find kth node from beginning
    // find kth node from end
    // swap
    // two pass
   
    
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    let kPrev = null;
    
    for(let i = 1; i<k+1; i++){
        first = first.next;
    }
    
    let kFirst = first;
        
    while(first != null){
        first = first.next;
        second = second.next;
    }
    let kLast = second;
    
    let temp = kFirst.val;
    kFirst.val = kLast.val;
    kLast.val = temp;
    return dummy.next;
        
};


