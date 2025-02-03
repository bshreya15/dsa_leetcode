class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "" or len(s) < len(t): 
            return ""
        
        t_charDict = {}
        window_charDict = {}

        for ch in t:
            # {'A':1, 'B':1, 'C':1}
            t_charDict[ch] = 1 + t_charDict.get(ch, 0) 
        
        # len(t_charDict) = 3
        have, need = 0, len(t_charDict)

        # res
        # resLen base infinity because need to find minimum
        res, resLen = [-1,-1], float("infinity")

        # left pointer
        l = 0

        # r -> right pointer
        for r in range(len(s)):
            # char at r index in s
            ch_r = s[r]
            # update count of ch in window_charDict
            window_charDict[ch_r] = 1 + window_charDict.get(ch_r, 0)

            # s[r] in t and count of s[r] is exactly equal to need
            if ch_r in t_charDict and window_charDict[ch_r] == t_charDict[ch_r]:
                have += 1
            
            while have == need:
                # update result
                if (r-l+1) < resLen:
                    res = [l,r]
                    resLen = (r-l+1)

                # pop char from left of our window
                # decrease count of ch = s[l] in 
                ch_l = s[l]
                window_charDict[ch_l] -= 1

                if ch_l in t_charDict and window_charDict[ch_l] < t_charDict[ch_l]:
                    have -= 1
                l += 1
        
        l,r = res
        return s[l:r+1] if resLen != float("infinity") else ""
        