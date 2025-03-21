let myText = document.getElementById("myText");
let result = document.getElementById("result");

myText.addEventListener("input" , ()=>{
    if(myText.value.length<6){
        result.textContent = "Weak";
    }else if(myText.value.length<8){
        result.textContent = "Good";
    }else if(myText.value.length<=9){
        result.textContent = "Better"
    }else{
        result.textContent = "Best";
    }
})