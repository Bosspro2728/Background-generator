var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// console.log(css);
// console.log(color1);
// console.log(color2);

//we have different events that we can check for: keepress,click,mousesense, input, etc

css.innerHtml =body.style.background + ";";


function linearGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
//a way to connect colors that we use in the linear gradiant we can uae with the + sign
//	body.style.background = "color1Value";  this dosent work because we use two colors
//so we use:
//as you can see we use two semicolums one for the css and one for the js.
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", linearGradient);

color2.addEventListener("input", linearGradient);

button.addEventListener("click", function(){
	const randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16); 
	const randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right, " + randomColor1 + "," + randomColor2 + ")";
	css.textContent = body.style.background + ";";
})


// This code generates a random hexadecimal color code and assigns it to the variable randomColor1. Here's how it works:
// Math.random() generates a random floating-point number between 0 and 1 (exclusive).
// Math.random() * 16777215 multiplies the random number by 16777215. The number 16777215 represents the decimal value of the maximum possible RGB color code, which is #FFFFFF in hexadecimal.
// Math.floor(Math.random() * 16777215) rounds down the resulting value to the nearest integer. This gives us a random integer between 0 and 16777214.
// .toString(16) converts the random integer to a hexadecimal string. The argument 16 specifies that the conversion should be in base 16 (hexadecimal).
// "#" + Math.floor(Math.random() * 16777215).toString(16) concatenates the "#" symbol with the hexadecimal color code string, forming a valid CSS color code in the format "#xxxxxx", where "x" represents a hexadecimal digit (0-9 and A-F).
// So, the final result is a randomly generated CSS color code assigned to the variable randomColor1. Each time this code is executed, a different random color code will be generated.
// In JavaScript, the .toString() method can be used on numbers to convert them to strings. By specifying the base as 16, the method converts the number to a string representation using hexadecimal digits (0-9 and A-F).
// For example, if the random integer generated is 16777215, which is the maximum value used in this code, the .toString(16) will convert it to the hexadecimal string "FFFFFF". Similarly, if the random integer is 255, the hexadecimal string would be "FF", and so on.
// By appending the "#" symbol to the beginning of the hexadecimal string, the resulting string becomes a valid CSS color code, like #FFFFFF for white, #FF0000 for red, and so on.



