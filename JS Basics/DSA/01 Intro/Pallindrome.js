const isPallindrome = function (x) {
    // console.log(+"a");
    return x === +x.toString().split("").reverse().join("")

    // 121 => "121" ->  ["1","2","1"] -> "121" -> 121 -> true

};

const res = isPallindrome(121);
console.log(res);