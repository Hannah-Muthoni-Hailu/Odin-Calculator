let a, b, res;

// Display variable
const display = document.querySelector(".display");
display.textContent = ""

// Numbers grid
const nums = document.querySelector(".nums");

for(let i = 1; i <= 9; i++){
    const num = document.createElement("button");
    num.textContent = i
    num.style.height = "30px";
    num.style.width = "30px";
    num.addEventListener("click", () => {
        numPressed(num.textContent)
    })
    nums.append(num);
}

const zero = document.createElement("button");
zero.textContent = 0;
zero.style.height = "30px";
zero.style.width = "30px";
zero.addEventListener("click", () => {
    numPressed(zero.textContent)
})
nums.append(zero);

function numPressed(value) {
    // Reset res if it had been set after the equals sign was pressed
    if(res){
        res = null
    }
    display.textContent = display.textContent + value;
}