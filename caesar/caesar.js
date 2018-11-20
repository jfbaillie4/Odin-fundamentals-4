const caesar = function(string, shift) {
    
    // Caesar's cipher transforms text by shifting each letter in an input along the alphabet.

    alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    let input = string.split("");
    let len = input.length;
    let outputarray = [];

    // The transcribe function performs the cipher, we needed to add conditionals to 
    // a) deal with non-letters and b) deal with negative or very large shifts.

    function transcribe(character) {
        if (alphabet.includes(character)) {
            let start = (alphabet.indexOf(character) + 1);
            var ciphletter = start + shift;
            if (ciphletter > 26) {
                ciphletter = (ciphletter % 26)-1;
                return alphabet[ciphletter];
            }
            else if (ciphletter < 0) {
                ciphletter = (26 + (ciphletter % 26))-1;
                return alphabet[ciphletter];
            }
            else {
                ciphletter = ciphletter - 1;
                return alphabet[ciphletter];
            }
        } else {
            return character;
        }
    }

    //This for loop is the engine. Added a conditional to return letters in same case as input. 

    for (i=0; i < len ; i++) {
        let character = input[i];
        if (character.toUpperCase() === character) {
            let lowercase = character.toLowerCase();
            let insert = transcribe(lowercase).toUpperCase();
            outputarray.push(insert);
        } else {
            let insert = transcribe(character);
            outputarray.push(insert);
        }
    }

    let outputstring = outputarray.join("");
    return outputstring;

}

module.exports = caesar
