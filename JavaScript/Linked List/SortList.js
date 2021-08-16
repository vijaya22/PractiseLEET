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
// top down merge sort
// time complexity - O(n log n)
// space complexity - O(log n)
var sortList = function (head) {
    if (head == null || head.next == null) return head;
    let mid = middle(head);
    let left = sortList(head);
    let right = sortList(mid);
    return merge(left, right);
};
function middle(head) {
    let midPrev = null;
    while (head != null && head.next != null) {
        midPrev = midPrev == null ? head : midPrev.next;
        head = head.next.next;
    }
    let mid = midPrev.next;
    midPrev.next = null;
    return mid;
}
function merge(list1, list2) {
    let dummyHead = new ListNode();
    let tail = dummyHead;
    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
            tail = tail.next;
        }
        else {
            tail.next = list2;
            list2 = list2.next;
            tail = tail.next;
        }
    }
    tail.next = (list1 != null) ? list1 : list2;
    return dummyHead.next;
}