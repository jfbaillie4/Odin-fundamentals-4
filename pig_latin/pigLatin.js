function translate(str) {
	const vowels = ["a","e","i","o","u"];
	const resultArray = [];
	
	function pigLatin (entry) {
		const letters = entry.toLowerCase().split("");
		if (vowels.includes(letters[0])) {
			letters.push("a","y");
			const result_local = letters.join("");
			resultArray.push(result_local);
		} else {
			for (i=0; i<letters.length ;i++) {
				if (vowels.includes(letters[0])) {
					break;
				} else if (letters[0] === "q" && letters[1] === "u") {
					letters.splice(letters[0], 2);
					letters.push("q", "u");
				} else {
					const letter = letters[0];
					letters.splice(letters[0], 1);
					letters.push(letter);
				}
			}
		letters.push("a","y");
		const result_local = letters.join("");
		resultArray.push(result_local);
		}
	};
	
	const arr = str.split(" ");
	arr.map(pigLatin);

	return resultArray.join(" ");
};


module.exports = {
	translate
}

