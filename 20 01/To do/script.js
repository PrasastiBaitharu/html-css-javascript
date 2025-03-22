let item = document.getElementById("item");
let list = document.getElementById("list");
let add = document.getElementById("add");

add.addEventListener("click" , ()=>{
    const para = document.createElement("p");
    para.textContent = item.value;
    list.appendChild(para);
    item.value = "";

    const btn = document.createElement("button");
    btn.textContent = "X";
    para.appendChild(btn);
    btn.addEventListener("click" , ()=>{
        list.removeChild(para);
    })
});
