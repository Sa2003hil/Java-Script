const isAnagram = function (a, b) {
    return a.split("").sort().join("") === b.split("").sort().join("")
}

console.log(isAnagram("listen", "silent"));


// second solution using OBJECTS

const isAnagram1 = function (s, t) {
    if (s.length() != t.length()) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
}