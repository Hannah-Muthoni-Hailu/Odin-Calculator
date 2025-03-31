let a, b, res;

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
                button.innerHTML = "<p>clear</p>";
            } else {
                button.innerHTML = "<p><br></p>";
            }
        } else {
            button.innerHTML = `${counter}`;
            if (counter < 9){
                counter += 1;
            } else {
                counter = 0
            }
            button.addEventListener("click", () => {
                console.log(counter);
            })
        }
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