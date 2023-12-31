/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	///Your code Starts here 
	if (word1 !== Number) {
		let a = word1.split("");
		return a.length;
	} else {
		return -1;
	}
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/