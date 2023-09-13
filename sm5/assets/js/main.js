let b = prompt('Введите значение');

let block = ' <div class="block"></div>';
let block_list = document.querySelector('.block_list');

for(let a = 0; a < b; a++){
    block_list.insertAdjacentHTML('beforeend',block);
}