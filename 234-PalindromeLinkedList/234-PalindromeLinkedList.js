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
    if (!head || !head.next){
        return true
    }

    let slow = head
    let fast = head.next

    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    let second = slow.next
    slow.next = null
    let prev = null

    while (second){
        let nxt = second.next
        second.next = prev
        prev = second
        second = nxt
    }

    let first = head
    second = prev

    while (second){
        if (first.val != second.val){
            return false
        }

        first = first.next
        second = second.next 
    }

    return true;
    
};