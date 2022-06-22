function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	a = Number(a);
	b = Number(b);

	switch (operator) {
		case "+":
			return add(a, b);

		case "-":
			return subtract(a, b);

		case "x":
			return multiply(a, b);

		case "/":
			return divide(a, b);

		default:
			break;
	}
}

function clearDisplay() {
	screen.textContent = "";
}


let numbers = document.querySelectorAll(".number");
let screen = document.querySelector(".display");
let clear = document.querySelector(".clear");
let operators = document.querySelectorAll(".operator");
let screenResult = document.querySelector(".result");
let clearAll = document.querySelector(".clear-all");

let pastNumber = 0;
let pastOperator = null;
let dotUsed = false;

function reset() {
	pastNumber = 0;
	pastOperator = null;
	dotUsed = false;
}


clear.addEventListener("click", clearDisplay);

numbers.forEach(element => element.addEventListener("click", (event) => {
	if ((dotUsed && element.textContent == "." )|| screen.textContent.length >= 32) {
		return;
	}

	screen.textContent = screen.textContent + event.target.textContent;

	if (element.textContent == ".") {
		dotUsed = true;
	}
}));

operators.forEach(element => {
	element.addEventListener("click", () => {
		if (pastOperator != null) {
			if(pastOperator != "="){
				result = operate(pastOperator, pastNumber, screen.textContent);
				screen.textContent = result;
			}
			
		}
		if(screen.textContent){
			pastNumber = Number(screen.textContent);
		}

		pastOperator = element.textContent;
		clearDisplay();
		screenResult.textContent = pastNumber;
		dotUsed = false;

	})
})

clearAll.addEventListener("click", () => {
	screen.textContent = "";
	screenResult.textContent = "";
	reset();
});