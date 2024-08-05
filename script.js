let textarea = document.getElementById('textarea');
let words = document.getElementById('words')
let chars = document.getElementById('characters')
let left = document.getElementById('left')
let button = document.getElementById('button')
let charLimit = 200;

textarea.addEventListener('keyup',()=>{
    chars.innerHTML = (textarea.value).length
    words.innerHTML = (textarea.value).split(' ').length
    left.innerHTML = charLimit - (textarea.value).length
    if(textarea.value.length>200){
       textarea.value = String(textarea.value).substring(0, charLimit);
    }
})

button.addEventListener('click',()=>{
    textarea.value = ''
    chars.innerHTML = 0
    words.innerHTML = 0
    left.innerHTML = charLimit
})