const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const equal = document.getElementById("equal");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

let num1 = 0;
let num2 = 0;
let opr = "";
let result = 0;

one.addEventListener("click" ,()=>{
    counter.innerHTML = counter.innerHTML + one.innerText;
    // num1 = counter.innerHTML;
    // console.log(num1);
})
two.addEventListener("click" ,()=>{
    counter.innerHTML = counter.innerHTML + two.innerText;
    // num1 = counter.innerHTML;
    // console.log(num1);
})
three.addEventListener("click" ,()=>{
    counter.innerHTML = counter.innerHTML + three.innerText;
    // num1 = counter.innerHTML;
    // console.log(num1);
})
four.addEventListener("click" ,()=>{
    counter.innerHTML = counter.innerHTML + four.innerText;
    // num1 = counter.innerHTML;
    // console.log(num1);
})
five.addEventListener("click" ,()=>{
    counter.innerHTML = counter.innerHTML + five.innerText;
    // num1 = counter.innerHTML;
    // console.log(num1);
})
six.addEventListener("click" ,()=>{
    counter.innerHTML = counter.innerHTML + six.innerText;
    // num1 = counter.innerHTML;
    // console.log(num1);
})
seven.addEventListener("click" ,()=>{
    counter.innerHTML = counter.innerHTML + seven.innerText;
    // num1 = counter.innerHTML;
    // console.log(num1);
})
eight.addEventListener("click" ,()=>{
    counter.innerHTML = counter.innerHTML + eight.innerText;
    // num1 = counter.innerHTML;
    // console.log(num1);
})
nine.addEventListener("click" ,()=>{
    counter.innerHTML = counter.innerHTML + nine.innerText;
    // num1 = counter.innerHTML;
    // console.log(num1);
})
zero.addEventListener("click" ,()=>{
    counter.innerHTML = counter.innerHTML + zero.innerText;
    // num1 = counter.innerHTML;
    // console.log(num1);
})

plus.addEventListener("click" , ()=>{
    num1 = counter.innerText;
    console.log(num1);
    opr = "+"
    counter.innerText = "";
})
minus.addEventListener("click" , ()=>{
    num1 = counter.innerText;
    console.log(num1);
    opr = "-"
    counter.innerText = "";
})
mul.addEventListener("click" , ()=>{
    num1 = counter.innerText;
    console.log(num1);
    opr = "*"
    counter.innerText = "";
})
div.addEventListener("click" , ()=>{
    num1 = counter.innerText;
    console.log(num1);
    opr = "/"
    counter.innerText = "";
})
equal.addEventListener("click" , ()=>{
    num2 = counter.innerText;
    console.log(num1) ; 
    console.log(num2);
    if(opr === "+"){
        result = parseInt(num1)+parseInt(num2);
        console.log(result);
        counter.innerText = result;
    }else if(opr === "-"){
        result = parseInt(num1)-parseInt(num2);
        console.log(result);
        counter.innerText = result;
    }
    else if(opr === "*"){
        result = parseInt(num1)*parseInt(num2);
        console.log(result);
        counter.innerText = result;
    }else if(opr === "/"){
        result = parseInt(num1)/parseInt(num2);
        console.log(result);
        counter.innerText = result;
    }else{
        console.log("Error");
    }
})