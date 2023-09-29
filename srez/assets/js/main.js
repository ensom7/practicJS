let list = [];


let title = document.getElementById('title');
let price = document.getElementById('price');
let btn = document.getElementById('add-btn');
let kross_wrapper = document.querySelector('.kross__list');


function showNews(){
    kross_wrapper.innerHTML = '';
    list.forEach(element =>{
        kross_wrapper.innerHTML += `
        <div class="kross__item">
        <img src="./assets/img/Group 128.png" alt="">
        <h2>${element.title}</h2>
        <div class="price">
            <div class="price_block">
                <h4 class="price__title">Цена:</h4>
                <p class="price__text">${element.price}руб.</p>
            </div>
            <div class="price_btn">
                <img src="./assets/img/Group 91.svg" alt="">
            </div>
        </div>
    </div>
        `
    })
}


function addNews(){

    if(title.value == ""){
        alert("Введите название товара");

    }   
    else if(title.value.length < 8){
        alert("Кол-во символов не может быть меньше 5")
    }
    else if(price.value == ""){
        alert("Введите цену")
    }
    else if(price.value.length > 15){
        alert("Цена не может превышать более 15 символов")
    }
    else{
        let object = {
            title:title.value,
            price:price.value,
        }
        list.push(object)
        console.log(list)
        title.value = ''
        price.value = ''

    
        showNews()
    }
   
}

btn.addEventListener('click',addNews);



    
function setColor(e){
    if(e.type === "mouseover"){
        e.target.style.backgroundColor = "#8BB43C";
        
    }
    else if(e.type === "mouseout"){
        e.target.style.backgroundColor = "#A5D364";
    }
}

btn.addEventListener("mouseover",setColor);
btn.addEventListener("mouseout",setColor);



// изменение цвета фона
document.addEventListener('keyup',function(event){
    if('d' == event.key.toLowerCase()){
        let frame = document.getElementById('frame');
        frame.style.backgroundColor = 'black';
        frame.style.color = 'white';
    }
    // else if('w' == event.key.toLowerCase()){
    //     document.body.style.backgroundColor = "white";
    //     document.body.style.color = "black";
    // }
})