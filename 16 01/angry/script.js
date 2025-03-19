let angry = document.getElementById("angry");
angry.addEventListener("click" , ()=>{
    if(angry.innerHTML === "I am angry"){
        angry.innerHTML = "Don't Disturb";
    }else{
        angry.innerHTML = "I am angry";
    }
})