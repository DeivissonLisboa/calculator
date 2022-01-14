// Display
const displayText = document.getElementById("displayText");
let displayScaleCounter = 5;
let displayBuffer = "";
let operation = {};

// Clear
const clear = (clearOperation = true) => {
    displayText.innerText = "0";
    displayBuffer = "";
    displayScaleCounter = 6;
    displayText.style.setProperty(
        "--displayFontScale",
        `${displayScaleCounter}em`
    );
    if (clearOperation) {
        operation = {};
    }
};
document.getElementById("clear").onclick = clear;

// Change Sign
document.getElementById("changeSign").onclick = () => {
    const value = -parseFloat(displayText.innerText);
    displayText.innerText = value;
};

// Percentage
document.getElementById("porcent").onclick = () => {
    operation.a = parseFloat(displayText.innerText);
    operation.foo = "porcent";
    clear(false);
};

// Division
document.getElementById("div").onclick = () => {
    operation.a = parseFloat(displayText.innerText);
    operation.foo = "div";
    clear(false);
};

// Multiplication
document.getElementById("prod").onclick = () => {
    operation.a = parseFloat(displayText.innerText);
    operation.foo = "prod";
    clear(false);
};

// Subtraction
document.getElementById("sub").onclick = () => {
    operation.a = parseFloat(displayText.innerText);
    operation.foo = "sub";
    clear(false);
};

// Sum
document.getElementById("sum").onclick = () => {
    operation.a = parseFloat(displayText.innerText);
    operation.foo = "sum";
    clear(false);
};

// Numbers
document.getElementById("one").onclick = () => {
    displayBuffer += 1;
    displayText.innerText = displayBuffer;
};
document.getElementById("two").onclick = () => {
    displayBuffer += 2;
    displayText.innerText = displayBuffer;
};
document.getElementById("three").onclick = () => {
    displayBuffer += 3;
    displayText.innerText = displayBuffer;
};
document.getElementById("four").onclick = () => {
    displayBuffer += 4;
    displayText.innerText = displayBuffer;
};
document.getElementById("five").onclick = () => {
    displayBuffer += 5;
    displayText.innerText = displayBuffer;
};
document.getElementById("six").onclick = () => {
    displayBuffer += 6;
    displayText.innerText = displayBuffer;
};
document.getElementById("seven").onclick = () => {
    displayBuffer += 7;
    displayText.innerText = displayBuffer;
};
document.getElementById("eight").onclick = () => {
    displayBuffer += 8;
    displayText.innerText = displayBuffer;
};
document.getElementById("nine").onclick = () => {
    displayBuffer += 9;
    displayText.innerText = displayBuffer;
};
document.getElementById("zero").onclick = () => {
    if (displayText.innerText != "0") {
        displayBuffer += 0;
        displayText.innerText = displayBuffer;
    }
};
document.getElementById("dot").onclick = () => {
    displayBuffer += ".";
    displayText.innerText = displayBuffer;
};

// Iguals
document.getElementById("igual").onclick = () => {
    const { a, foo } = operation;
    const b = parseFloat(displayText.innerText);
    clear();
    if (a) {
        switch (foo) {
            case "sum":
                displayText.innerText = a + b;
                break;
            case "sub":
                displayText.innerText = a - b;
                break;
            case "prod":
                displayText.innerText = a * b;
                break;
            case "div":
                displayText.innerText = a / b;
                break;
            case "porcent":
                displayText.innerText = (a / 100) * b;
                break;
        }
    } else {
        displayText.innerText = b;
    }
};

// Formating display
const buttons = document.getElementById("buttons");

buttons.onclick = () => {
    const displayScale =
        getComputedStyle(displayText).getPropertyValue("--displayFontScale");
    if (displayBuffer.length % 4 == 0 && parseInt(displayScale[0]) >= 3) {
        displayScaleCounter--;
        displayText.style.setProperty(
            "--displayFontScale",
            `${displayScaleCounter}em`
        );
    }
};
