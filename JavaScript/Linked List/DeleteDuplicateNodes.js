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
var deleteDuplicates = function(head) {
    let map = new Map();
    let currentNode = head;
    let prevNode = null;
    while(currentNode != null){
        if(map.has(currentNode.val)){
            map.set(currentNode.val,map.get(currentNode.val)+1);
            prevNode.next = currentNode.next;
        }
        else{
            map.set(currentNode.val,1);
            prevNode = currentNode;
        }
        currentNode=currentNode.next;
    }
    return head
};
