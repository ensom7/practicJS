
function setColor(e){
    if(e.type === "mouseover"){
        e.target.style.backgroundColor = "black";
    }
    else if(e.type === "mouseout"){
        e.target.style.backgroundColor = "red";
    }
}

function clik(r){
    if(r.type === "mousedown"){
        r.target.style.backgroundColor = "#628751";
    }
    else if(r.type === "mouseup"){
        r.target.style.backgroundColor = "#F4E9DE";
    }
}

function click(t){
    if(t.type === "click"){
        t.target.style.backgroundColor = "violet";
    }
}

function dblclick(o){
    if(o.type === "dblclick"){
        o.target.style.backgroundColor = "blue";
        o.target.style.color = "white";
    }
}

function contextMenu(p){
    if(p.type === "contextmenu"){
        p.target.style.backgroundColor = "pink";
    }
}

let button = document.querySelector('.button');
button.addEventListener("mouseover",setColor);
button.addEventListener("mouseout",setColor);


let button2 = document.querySelector('.button2');
button2.addEventListener("mousedown",clik);
button2.addEventListener("mouseup",clik);

let button3 = document.querySelector('.button3');
button3.addEventListener("click",click);

let button4 = document.querySelector('.button4');
button4.addEventListener("dblclick",dblclick);

let button5 = document.querySelector('.button5');

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    button5.style.backgroundColor = "#" + randomColor;
}
button5.addEventListener('mousemove', setBg)


let button6 = document.querySelector('.button6');
button6.addEventListener("contextmenu",contextMenu);
