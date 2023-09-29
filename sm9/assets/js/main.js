document.addEventListener('keydown', function(event){
    if('r' == event.key.toLowerCase()){
        let body = document.querySelector('body')
        body.style.backgroundColor ="red";
    }
})

document.addEventListener('keyup', function(event){
    if('r' == event.key.toLowerCase()){
        let body = document.querySelector('body')
        body.style.backgroundColor ="white";
    }
})
document.addEventListener('keydown', function(event){
    if('g' == event.key.toLowerCase()){
        let body = document.querySelector('body')
        body.style.backgroundColor ="green";
    }
})
document.addEventListener('keyup', function(event){
    if('g' == event.key.toLowerCase()){
        let body = document.querySelector('body')
        body.style.backgroundColor ="white";
    }
})
document.addEventListener('keydown', function(event){
    if('b' == event.key.toLowerCase()){
        let body = document.querySelector('body')
        body.style.backgroundColor ="blue";
    }
})
document.addEventListener('keyup', function(event){
    if('b' == event.key.toLowerCase()){
        let body = document.querySelector('body')
        body.style.backgroundColor ="white";
    }
})

let blockBox = document.querySelector('.block')

document.addEventListener('keydown', function(event){
    if(event.key == 'w'){
        blockBox.style.top = blockBox.offsetTop - 10 + 'px'
    } else if(event.key == 'a'){
        blockBox.style.left = blockBox.offsetLeft - 10 + 'px'
    } else if(event.key == 'd'){
        blockBox.style.left = blockBox.offsetLeft + 10 + 'px'
    } else if(event.key == 's'){
        blockBox.style.top = blockBox.offsetTop + 10 + 'px'
    }
})