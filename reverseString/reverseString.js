const reverseString = function(string) {
    let array = string.split("");
    let rev = array.reverse();
    let output = rev.join("");
    return output;
}

module.exports = reverseString
