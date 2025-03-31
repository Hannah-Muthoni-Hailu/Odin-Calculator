let a, b, res;

const parentDiv = document.querySelector(".container");

for(var i = 0; i < 4; i++) {
    const childDiv = document.createElement("div");
    for (var j = 0; j < 4; j++) {
        const div = document.createElement("div");
        div.innerHTML = "<p>num</p>";
        childDiv.appendChild(div);
    }
    parentDiv.appendChild(childDiv);
}

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