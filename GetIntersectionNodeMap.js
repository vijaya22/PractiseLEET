/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // time complexity - O(n+m)
    // space complexity - O(n)
    let aMap = new Map();
    let aRoot = headA;
    while(aRoot != null){
        aMap.set(aRoot, 1);
        aRoot = aRoot.next;
    }
    let bRoot = headB;
    while(bRoot != null){
        if(aMap.has(bRoot)){
            return bRoot;
        }
        bRoot = bRoot.next;
    }
    return null;
};
