/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    return s.split("").sort().join("") === t.split("").sort().join("")

    //if (length(s) != length(t)) return False;

};