
let result = document.getElementById("result");

let btnAddition = document.getElementById("add");
let btnSubtract = document.getElementById("subtract");
let btnMultiply = document.getElementById("multiply");
let btnDivide = document.getElementById("divide");

let button = document.querySelectorAll("button");

let toggle = document.getElementById("themeToggle");
let body = document.body;

function getInputs(){

    let n1 = Number(document.getElementById("FirstNumber").value);
    let n2 = Number(document.getElementById("SecondNumber").value);

    return {n1, n2};
}

function addNumber(){
    var inputs = getInputs();

    result.innerText = inputs.n1 + inputs.n2;
}

function subractNumber(){
    var inputs = getInputs();

    result.innerText = inputs.n1 - inputs.n2;
}

function multiplyNumber(){
    var inputs = getInputs();

    result.innerText = inputs.n1 * inputs.n2;
}

function divisionNumber(){
    var inputs = getInputs();
    if(inputs.n2 === 0){
        result.innerText = "undefined";
    }
    else{
        result.innerText = inputs.n1 / inputs.n2;
    }
}

function toggleTheme(){
    if(btnAddition.className === "btn btn-dark"){
        button.forEach(button => button.classList.replace("btn-dark", "btn-light"));
    }
    else{
        button.forEach(button => button.classList.replace("btn-light", "btn-dark"));
    }
    
    body.classList.toggle("dark-mode");
}

btnAddition.addEventListener("click", addNumber);
btnSubtract.addEventListener("click", subractNumber);
btnMultiply.addEventListener("click", multiplyNumber);
btnDivide.addEventListener("click", divisionNumber);

toggle.addEventListener("click", toggleTheme); 