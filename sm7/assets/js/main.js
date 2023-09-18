let news=[];

let inputName = document.querySelector('.inputName');
let inputDate = document.querySelector('.inputDate');
let inputText = document.querySelector('.inputText');
let button = document.querySelector('.button');
let newsPlace = document.querySelector('.news');

function showNews (){
    newsPlace.innerHTML = '';
    news.forEach(element =>{
        newsPlace.innerHTML += `
            <div class = "news-one">
                <p>${element.name}</p>
                <p>${element.date}</p>
                <p>${element.text}</p>
            </div>
        `
    })
}

function addNews(){
    let object = {
        name:inputName.value,
        date:inputDate.value,
        text:inputText.value
    }
    news.push(object)
    inputName.value = ''
    inputDate.value = ''
    inputText.value = ''
    showNews()
}
button.addEventListener('click',addNews)


