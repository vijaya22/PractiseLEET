/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class AddTwoNumbers {
    public ListNode addTwoNumbers(ListNode a, ListNode b) {
    ListNode sum = new ListNode();
		ListNode start = sum;
		int carry = 0;
    while (a != null || b != null){
			int a_value = (a != null) ? a.val : 0;
      int b_value = (b != null) ? b.val : 0; 
			sum.val = (a_value + b_value + carry) % 10;
      carry = (a_value + b_value + carry) / 10;
			a = (a !=  null) ?  a.next : null; 
			b = (b != null) ? b.next: null ;
			if (a != null || b != null) {
				sum.next = new ListNode(); 
				sum = sum.next;
			}
    }
    if(carry != 0 ){
	     sum.next = new ListNode(carry);
    }
    return start;
    }
}
