function dePuncAndTrim (str) {
    var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    var spaceRE = /\s/g;
    let str2 = str.replace(punctRE, '').replace(spaceRE, '');
    str2 = str2.toLowerCase()
    return str2;
 }
 
 const palindromes = function(word) {
    const cleaned = dePuncAndTrim(word);
    const array = cleaned.split("");
    const newString = array.reverse().join("");
    return (cleaned === newString ? true : false);
};

module.exports = palindromes