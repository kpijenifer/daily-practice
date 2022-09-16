//colorchange


function colorchange(){
let head=document.getElementById("heading");
let col=document.getElementById("color").value;
     head.style.color=col;
}
document.getElementById("btn").addEventListener("click",colorchange);


