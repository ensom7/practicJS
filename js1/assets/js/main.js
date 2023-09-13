// let city = prompt('Название города');
// let year = prompt('Год образования');
// let people = prompt('Население');

// let thisyear = 2023;
// let l = thisyear - year;



// alert ('Городу ' + city + ' исполнилось ' + l + ' лет с момента его образования. Население - ' + people + ' человек');
//выбор элементов
let logo = document.querySelector('.logo');
console.log(logo)

let links = document.querySelectorAll('.link')
console.log(links)

let email = document.getElementById('email')
console.log(email)
//изменение css
logo.style.background = 'red';
logo.style.padding = '10px';
logo.style.borderRadius= '10px';
links[1].style.color = 'black';
email.style.padding = "10px";

//1 вариант
console.log(email.value)
email.value = 'qqwer'
console.log(email.value)

//2 вариант
let text = document.guerySelector ('teatarea')
text.textContent = 'wertyu'

//3 вариант
let text2 = 'qwer'
let box = '<div class ="box">' +text2+'</div>'
let for_box = document.querySelector('.for_box')
for_box.innerHTML = box