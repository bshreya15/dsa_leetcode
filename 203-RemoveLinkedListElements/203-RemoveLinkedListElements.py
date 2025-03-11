# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        dummy = ListNode(next = head)

        prev = dummy
        curr = head

        while curr:
            if curr.val == val:
                nxt = curr.next
                prev.next = nxt
                curr = nxt
            else:
                nxt = curr.next
                prev = curr
                curr = nxt
        
        return dummy.next
             