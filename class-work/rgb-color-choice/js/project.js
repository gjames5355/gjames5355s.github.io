// 1. Use document.getElementById() and assign the .onclick event to #color-button

 var colorButton = document.getElementById('color-button').onclick = colorButton;

// 2. Write a function, named changeColor, that is called when #color-button is clicked

var changeColor = function changeColor(colorButton) {
	var red = document.getElementById('red').value;
	var green = document.getElementById('green').value;
	var blue = document.getElementById('blue').value;




// 3. Inside of the function changeColor, use variables to store the <input> values from #red, #green, and #blue
// - Use .value to get the values from the inputs
// HINT: var red = document.getElementById('red').value;

// 4. Create a variable, named colorStr, which concatenates the above red, green, and blue variables into the format:
// rgb(x, y, z)
// - If the user enters: 100, 150, and 200, colorStr should be: rgb(100, 150, 200)

	var colorStr = red + green + blue;
	 
	 // I am very confused on how to perform this.



// 5. Use .innerHTML to change the text inside of #colorful-text to colorStr

	document.getElementById('colorful-text').innerHTML = 'colorStr';


// 6. Use .style.background to change the background of #wrapper to colorStr

	wrapper.style.background = 'colorStr';
}