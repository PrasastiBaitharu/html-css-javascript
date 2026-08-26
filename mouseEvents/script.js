let dblbtn = document.getElementById('dblbtn');
let mousebtn = document.getElementById('mousebtn');

dblbtn.ondblclick = function() {
    this.innerHTML = 'Double Clicked!';
    // dblbtn.innerHTML = 'Double Clicked!';
    alert("Double Clicked!");
}

//When mouse key is pressed
// mousebtn.onmousedown = function() {
//     alert("Mouse Down Event Triggered!");
// }

//when mouse key is released
// mousebtn.onmouseup = function() {
//     alert("Mouse Up Event Triggered!");
// }

//when mouse enter the mousebtn area it is automatically triggered without any click
// mousebtn.onmouseenter = function() {
//     alert("Mouse Enter Event Triggered!");
// }

//when mouse leave the mousebtn area it is automatically triggered without any click
// mousebtn.onmouseleave = function() {
//     alert("Mouse Leave Event Triggered!");
// }

//same as mouse enter
// mousebtn.onmousemove = function() {
//     alert("Mouse Move Event Triggered!");
// }

dblbtn.addEventListener('dblclick', function() {
    this.innerHTML = 'Double Clicked!';
    alert("Double Clicked!");
});