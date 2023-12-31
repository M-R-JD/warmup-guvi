/* Given two words, "isSameLength" returns whether the given words have the same length. */

function isSameLength(word1, word2) {
	///Your code Starts here 
	let a = word1.split("");
	let b = word2.split("");
	if (a.length == b.length) {
		return true;
	} else {
		return false;
	}
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

isSameLength("GUVI", "GEEK");
isSameLength("GUVI", "ZEN");
isSameLength("Hello", "GUVI");
*/