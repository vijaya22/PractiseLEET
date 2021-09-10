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
    // first approach 
    // copy linked list to an array
    // check if its palindrome or not
    // time com
    if(!head) return false;
    let copyArr = [];
    let copyHead = head;
    while(copyHead != null){
        copyArr.push(copyHead.val);
        copyHead = copyHead.next;
    }
    let start = 0;
    let end = copyArr.length -1;
    while(start<end){
        if(copyArr[start] != copyArr[end]) return false;
        start++;
        end--;
    }
    return true;
};
