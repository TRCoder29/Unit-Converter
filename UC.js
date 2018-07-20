// Hide "id=Output"
// document.querySelector('#output').style.display = "none";
// document.querySelector('#output').style.visibility = "hidden";

// Catch User Input
document.querySelector('#inputValue').addEventListener('input', convert);

// Catch Unit Selection
document.querySelector('#unit').addEventListener('input', convert);

function convert(e){
	// Test the function is called
	// console.log("function is run")


	// Get user input value
	let input = document.querySelector('#inputValue').value
	// let input = e.target.value;
	// console.log(input);

	// Get User's Unit Selection
	let unit = document.querySelector('#unit').value;
	// console.log(unit);

	// Check the Unit Value
	switch(unit) {
		case 'lbs':
			convertLbs(input);
			break;
		case 'grams':
			convertGrams(input);
			break;
		case 'kilograms':
			convertKilograms(input);
			break;
		case 'meters':
			convertMeters(input);
			break;
	}
}

	// Show Output
	// document.querySelector('#output').style.display="block"
	// document.querySelector('#output').style.visibility="visible";

	// Pounds to Grams
	// document.querySelector('#grams').innerHTML = input * 453.592;
	// // Pounds to Grams
	// document.querySelector('#kg').innerHTML = input * 453.592/1000;
	// 	// Pounds to Grams
	// document.querySelector('#oz').innerHTML = input * 16;