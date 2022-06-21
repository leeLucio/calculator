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

let pastNumber = 0;
let pastOperator = null;
let dotUsed = false;

numbers.forEach(element => element.addEventListener("click", (event) => {
	if(dotUsed && element.textContent == "."){
		return;
	}

	screen.textContent = screen.textContent + event.target.textContent;

	if (element.textContent == ".") {
		dotUsed = true;
	}
}));

clear.addEventListener("click", clearDisplay);

operators.forEach(element => {
	element.addEventListener("click", () => {
		if (pastOperator != null) {
			result = operate(pastOperator, pastNumber, screen.textContent);
			screen.textContent = result;
		}

		pastOperator = element.textContent;
		pastNumber = Number(screen.textContent);
		clearDisplay();
		screenResult.textContent = pastNumber;
		dotUsed = false;
	})
})