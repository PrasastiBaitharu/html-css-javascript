let myText = document.getElementById("myText");
let result = document.getElementById("result");

let value = "/10"
myText.addEventListener("input" , ()=>{
    result.textContent = myText.value.length+value;
    if(myText.value.length<=5){
        result.style.color = "black"
    }else if(myText.value.length>5 && myText.value.length<=9){
        result.style.color = "green"
    }else{
        result.style.color = "red";
    }
})