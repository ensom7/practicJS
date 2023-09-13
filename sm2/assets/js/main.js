let a = prompt('Введите стоимость товара');
let b = prompt('Введите количество денег клиента');

if (a == b){
    alert('Покупка совершена')
}else{
    if(a > b){
        let x = a-b;
        alert('Для покупки не хватает ' + x + 'p.');
    }else{
        let x = b - a;
        alert('Покупка совершена. Сдача ' + x + 'p.')
    }
}

// стилизация
let title = document.getElementById("title")
title.style.fontFamily = "Montserrat"



// вставка html
let for__add = document.querySelector('.for__add');
for__add.innerHTML = add;

