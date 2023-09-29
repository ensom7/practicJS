let in_name = document.getElementById("input1");
let in_date = document.getElementById("input2");
let err = document.getElementById("err");
let isErr;
let btn = document.getElementById("button");
let form = document.getElementById("inputs");
let link = document.getElementById("link");


form.addEventListener('submit',function(event){
    event.preventDefault()
    if(in_name.value == ""){
        err.insertAdjacentHTML('beforeend','Заполните поле с именем<br>');
        in_name.style.boxShadow = '0 0 10px 3px red';
        isErr = true;

    }else if(in_name.value.length < 2){
        err.insertAdjacentHTML('beforeend','Имя должно быть больше 2<br>');
        
        in_name.style.boxShadow = '0 0 10px 3px red';
        isErr = true;
    }
    else{
        in_name.style.boxShadow = '0 0 10px 3px green';
        err.innerHTML = "";
        isErr = false;
    }

       
    if(in_date.value == ""){
        err.insertAdjacentHTML('beforeend','Заполните поле с датой<br>');
        in_date.style.boxShadow = '0 0 10px 3px red';
        

    }else if(in_date.value.length < 4 || in_date.value.length > 4 ){
        err.insertAdjacentHTML('beforeend','В дате должно быть 4 значения<br>');
        in_date.style.boxShadow = '0 0 10px 3px red';
        isErr = true;
    }
    else if((2023 - in_date.value) < 18){
        err.insertAdjacentHTML('beforeend','Вам нет 18 лет');
        in_date.style.boxShadow = "0 0 10px 3px red";
    
    }
    else{
        link.insertAdjacentHTML('beforeend','<a href="https://club.z-go.ru/?do=exit" class="link-answer">Ссылка</a>');
        in_date.style.boxShadow = '0 0 10px 3px green';
        isErr = false;
    }   



})


