class Solution:
    def reorderList(self, head) -> None:
        slow = head
        fast = head.next

        # split list in two
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        second = slow.next
        slow.next = None
        prev = None

        # reverse second half list
        while second:
            temp = second.next
            second.next = prev
            prev = second
            second = temp
        
        second = prev
        first = head
        
        # Merge two lists to reorder
        while second:
            temp1 = first.next
            temp2 = second.next
            first.next = second
            second.next = temp1
            first = temp1
            second = temp2