let a, b, res;
let op;
let aSet = false;

// Variable for the display
const display = document.querySelector(".display");

// Create grid for the numbers and the plus sign
const parentDiv = document.querySelector("#nums");
let counter = 1;
for(var i = 0; i < 4; i++) {
    const childDiv = document.createElement("div");
    childDiv.style.height = "90px";
    for (var j = 0; j < 3; j++) {
        const button = document.createElement("button");
        button.style.width = "90px";
        button.style.height = "100%";
        if (i == 3 && j != 1) {
            if (j == 2) {
                button.innerHTML = "clear";
            } else {
                button.innerHTML = ".";
            }
        } else {
            button.innerHTML = `${counter}`;
            if (counter < 9){
                counter += 1;
            } else {
                counter = 0
            }
        }
        button.addEventListener("click", () => {
            // display value in display
            if (button.innerHTML == "clear") {
                display.innerHTML = "";
                a = null;
                b = null;
                res = null;
                op = null;
                aSet = false;
            } else {
                if (!res) {
                    display.innerHTML = display.innerHTML + button.innerHTML
                } else {
                    display.innerHTML = "";
                    display.innerHTML = display.innerHTML + button.innerHTML
                    if (op == "=") {
                        res = null;
                        a = null;
                    }
                }
            }
        })

        childDiv.appendChild(button);
    }
    parentDiv.appendChild(childDiv);
}

// Create grid for the operators
const opsDiv = document.querySelector("#ops");
let ops = ["+", "-", "*", "/", "="]
ops.forEach(element => {
    const button = document.createElement("button");
    button.innerHTML = `${element}`;
    button.style.width = "100%";
    button.style.height = "90px";
    opsDiv.appendChild(button)
    button.addEventListener("click", () => {
        if (!a) {
            a = Number(display.innerHTML);
            op = button.innerHTML
            display.innerHTML = ''
        } else if (a && !b) {
            b = Number(display.innerHTML);
            if (op == "+") {
                res = Math.floor(Math.round(operate(add, a, b) * 10000)) / 10000; // Round to the nearest 4 decimal places
                display.innerHTML = res;
                op = button.innerHTML
                a = res;
                b = null
            } else if (op == "-") {
                res = Math.floor(Math.round(operate(subtract, a, b) * 10000)) / 10000; // Round to the nearest 4 decimal places
                display.innerHTML = res;
                op = button.innerHTML
                a = res;
                b = null
            } else if (op == "*") {
                res = Math.floor(Math.round(operate(multiply, a, b) * 10000)) / 10000; // Round to the nearest 4 decimal places
                display.innerHTML = res;
                op = button.innerHTML
                a = res;
                b = null
            } else if (op == "/") {
                if (b == 0) {
                    display.innerHTML = "";
                    a = null;
                    b = null;
                    res = null;
                    op = null;
                    aSet = false;
                    alert("Invalid expression")
                } else {
                    res = Math.floor(Math.round(operate(divide, a, b) * 10000)) / 10000; // Round to the nearest 4 decimal places
                    display.innerHTML = res;
                    op = button.innerHTML
                    a = res;
                    b = null
                }
            } else {
                display.innerHTML = "";
                a = null;
                b = null;
                res = null;
                op = null;
                aSet = false;
                alert("Invalid expression")
            }
        }
    })
})


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
    return a/b;
}

function operate(op, a, b) {
    return op(a, b);
}