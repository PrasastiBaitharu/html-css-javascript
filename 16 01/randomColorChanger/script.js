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