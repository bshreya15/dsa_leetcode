/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    let dummy = new ListNode(-1, head)
    let prev = dummy
    let curr = head

    while (curr){
        if (curr.val === val){
            let nxt = curr.next
            prev.next = nxt
            curr = nxt
        }
        else{
            let nxt = curr.next
            prev = curr
            curr = nxt
        }
    }
    return dummy.next;
};