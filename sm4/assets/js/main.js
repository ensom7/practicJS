let logo = document.querySelector('.logo');
// console.log(logo)

let news = document.querySelectorAll('.news_item')
// console.log(links)

let news1 = document.getElementById('news1')
// console.log(email)
//изменение css
logo.style.background = 'red';
logo.style.padding = '150px';
logo.style.borderRadius= '20px';
news1.style.background = "gray";

let input = document.querySelector('.input')
console.log(input.value);
input.value = 'test text';
let textarea = document.getElementById('textarea');
console.log(textarea.textContent);
textarea.textContent = 'qq qq qq';
logo.textContent = '33de';

let box = '<div class="box">123</div>';
let for_box = document.querySelector('.for_box');
for_box.innerHTML = 'box';
//1 вариант
// console.log(email.value)
// email.value = 'qqwer'
// console.log(email.value)

//2 вариант
// let text = document.guerySelector ('teatarea')
// text.textContent = 'wertyu'

//3 вариант
// let text2 = 'qwer'
// let box = '<div class ="box">' +text2+'</div>'
// let for_box = document.querySelector('.for_box')
// for_box.innerHTML = box
