// Last updated: 6/2/2025, 9:24:30 PM
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    //return s.split("").sort().join("") === t.split("").sort().join("")

    if (s.length !== t.length) return false;
    
    let sObj = {};
    let tObj = {};

    for(let i=0 ; i < s.length; i++){
        sObj[s[i]] = (sObj[s[i]] || 0) + 1;
        tObj[t[i]] = (tObj[t[i]] || 0) + 1; 
    }

    for(const key in sObj){
        if(sObj[key] !== tObj[key]) return false;
    }

    return true;
};