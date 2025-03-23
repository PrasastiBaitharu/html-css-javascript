let counter = document.getElementById("counter");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

// console.log(counter);
// console.log(plusBtn);
// console.log(minusBtn);

let count = 0;



// plusBtn.addEventListener("click",()=>{
//     count = count+1;
//     // console.log(count);
//     counter.textContent = count
// })
// minusBtn.addEventListener("click",()=>{
//     count = count-1;
//     // console.log(count);
//     counter.textContent = count
// })



// function increaseValue(){
//     count = count+1;
//     // console.log(count);
//     counter.textContent = count
// }

// function decreaseValue(){
//     count = count-1;
//     // console.log(count);
//     counter.textContent = count
// }
// plusBtn.addEventListener("click",increaseValue)
// minusBtn.addEventListener("click",decreaseValue)

function updateCounter(value){
    count=count+value;
    counter.textContent = count
}
plusBtn.addEventListener("click",()=>{
    updateCounter(1)
})
minusBtn.addEventListener("click",()=>{
    updateCounter(-1)
})