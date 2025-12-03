// Global constants for the output element (this is fine)
const calculation_result = document.getElementById("calculation-result");

// Helper function to get the current number from an input field
function getCurrentNumber(elementId) {
    const value = document.getElementById(elementId).value;
    // Safely parse the value, defaulting to 0 if NaN or empty
    return parseFloat(value) || 0;
}

// All calculator functions now retrieve the LATEST values on click
function add() {
    const number1 = getCurrentNumber("number1");
    const number2 = getCurrentNumber("number2");
    
    const result = number1 + number2;
    console.log(result);
    
    // Check if the feedback element exists before using it
    if (calculation_result) {
        calculation_result.textContent = result;
    }
}

function subtract() {
    const number1 = getCurrentNumber("number1");
    const number2 = getCurrentNumber("number2");
    
    const result = number1 - number2;
    if (calculation_result) {
        calculation_result.textContent = result;
    }
}

function multiply() {
    const number1 = getCurrentNumber("number1");
    const number2 = getCurrentNumber("number2");
    
    const result = number1 * number2;
    if (calculation_result) {
        calculation_result.textContent = result;
    }
}

function divide() {
    const number1 = getCurrentNumber("number1");
    const number2 = getCurrentNumber("number2");
    
    // Safety check for division by zero
    if (number2 === 0) {
        if (calculation_result) {
            calculation_result.textContent = "Cannot divide by zero";
        }
        return;
    }
    
    const result = number1 / number2;
    if (calculation_result) {
        calculation_result.textContent = result;
    }
}

// Event Listeners (ensure your HTML has elements with these IDs)
document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);