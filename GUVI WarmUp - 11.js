/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	num1 = num1 * 60;
	return num1 * num2;
	//return num1*60/(num2);
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/