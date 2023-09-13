
let a1 = prompt('Введите стоимость товара')
let b1 = prompt('Введите кол-во денег')

let a = Number(a1)
let b = Number(b1)

if(a > b){
    let x = a - b;
    document.getElementById('text').innerHTML = 'Для покупки не хватает: '+ x + 'р.';
}
else if(a < b){
    let x = b - a;
    document.getElementById('text').innerHTML = 'Покупка совершена. Ваша сдача: '+ x + 'р.';
}
else{
    document.getElementById('text').innerHTML = 'Покупка совершена.'
}

let text = document.getElementById("text")
text.style.fontFamily = "Montserrat"
let title = document.getElementById("title")
title.style.fontFamily = "Montserrat"


let add =  '<p class="add">Вставка HTML-кода из JS</p>';
let for__add = document.querySelector('.for__add');
for__add.innerHTML = add;