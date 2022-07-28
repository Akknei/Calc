const displayValueBefore = document.getElementById("value-before");
const displayValueActually = document.getElementById("value-actually");
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");

const display = new Display(displayValueBefore, displayValueActually);

buttonNumbers.forEach(button =>{
    button.addEventListener("click", ()=> display.addNumber(button.innerHTML));
});

buttonOperators.forEach(button =>{
    button.addEventListener("click", ()=> display.computing(button.value));
});