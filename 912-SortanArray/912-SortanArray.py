class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        
        def merge(arr,L,M,R):
            list1 = arr[L : M+1]
            list2 = arr[M+1 : R+1]

            i,j,k = L,0,0

            while j < len(list1) and k < len(list2):
                if list1[j] <= list2[k]:
                    arr[i] = list1[j]
                    j += 1
                else:
                    arr[i] = list2[k]
                    k += 1
                i+=1

            while j < len(list1):
                nums[i] = list1[j]
                j += 1
                i += 1

            while k < len(list2):
                nums[i] = list2[k]
                k += 1
                i += 1


        def mergeSort(arr,l,r):
            if (l==r):
                return arr
            
            m = (l+r) // 2

            mergeSort(arr,l,m)
            mergeSort(arr,m+1,r)

            merge(arr,l,m,r)

            return arr

        return mergeSort(nums,0,len(nums)-1)