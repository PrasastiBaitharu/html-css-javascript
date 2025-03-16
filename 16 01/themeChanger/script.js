function generateRandomColor(){
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    return `rgb(${r}, ${g}, ${b})`;
}

const changeColor = document.getElementById("changeColor");
console.log(changeColor)

changeColor.addEventListener("click", ()=>{
    const bgColor = generateRandomColor();
    console.log(bgColor)
    document.getElementById("box").style.backgroundColor = bgColor
})


let theme = document.getElementById("theme");
let body = document.getElementById("body");
theme.addEventListener("click" , ()=>{
    if(theme.innerHTML === "Dark"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        theme.innerHTML = "Light";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
        theme.innerHTML = "Dark";
    }
})