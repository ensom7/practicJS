let namee = document.getElementById("input1");
let date = document.getElementById("input2");
let err = document.getElementById("err");
let isErr = "";
let lablename = document.getElementById('err');
let labledate = document.getElementById('err');

let btn = document.getElementById("button");
let form = document.getElementById("inputs");
let link = document.getElementById("link");



form.addEventListener('submit', function(event){
    
    lablename.innerHTML="";
    labledate.innerHTML="";

    if(namee.value.length < 2){
        namee.style.border = "1px solid red"
        lablename.insertAdjacentHTML('beforeend','Имя должно содержать не менее 2 символов')
        lablename.style.color = "red";
        isErr = "true"

    }
        else if(date.value == ""){
        date.style.border = "1px solid red"
        labledate.insertAdjacentHTML('beforeend','Введите год рождения')
        labledate.style.color = "red";
        isErr = "true"
    }else if((2023 - date.value) < 18){
        date.style.border = "1px solid red"
        labledate.insertAdjacentHTML('beforeend','Вам нет 18 лет')
        labledate.style.color = "red";
        isErr = "true"
        // let err = ''
    }   else{
        namee.style.border = "1px solid green"
        date.style.border = "1px solid green";
        link.style.display = "block"
        link.insertAdjacentHTML('beforeend','<a href="https://club.z-go.ru/?do=exit" class="link-answer">Ссылка</a>');
    }

    console.log(isErr)

})




