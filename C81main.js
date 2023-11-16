var canva=document.getElementById("Canva");
var ctx=canva.getContext("2d");
var color="black";

canva.addEventListener("mousedown",myMousedown);
function myMousedown(e){
    mouseX=e.clientX-canva.offsetLeft;
    mouseY=e.clientY-canva.offsetTop;

    circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouseX,mouseY,23,0,2*Math.PI);
    ctx.stroke()
}

ctx.beginPath();
    ctx.strokeStyle="Gray";
    ctx.lineWidth=2;
    ctx.arc(450,125,23,0,2*Math.PI);
    ctx.stroke()