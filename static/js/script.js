let btn = document.querySelector('.block-button').querySelector('button')

let is_again = false

btn.addEventListener('click', function () {
    let texts_block = document.querySelector('.texts');

    if (is_again) {
        texts_block.querySelector('h2').textContent = 'Абзац 1';
        texts_block.querySelector('h1').style.color = null;
        texts_block.querySelector('p').textContent = 'Абзац 3';
        is_again = false;
    }
    else{
        texts_block.querySelector('h2').textContent = 'Это не абзац';
        texts_block.querySelector('h1').style.color = 'purple';
        texts_block.querySelector('p').textContent = 'Веб ресурсы топ!';
        is_again = true;
    }
})

let exampleBlock = document.querySelector('.example-block');

let is_black = false;

exampleBlock.onclick = function () {
    let textBlock = exampleBlock.querySelector('p')
    if(!is_black){
        exampleBlock.className = 'example-block' + ' black-theme-block';
        textBlock.className = 'black-theme-text';
        textBlock.textContent = "Темная тема";
    }
    else{
        exampleBlock.className = 'example-block' + ' light-theme-block';
        textBlock.className = 'light-theme-text';
        textBlock.textContent = "Светлая тема";
    }

    is_black = !is_black;
}
let prev_elm;

function changeImg(elm) {
    if(prev_elm != elm){
        elm.style.width = '200px';
        elm.style.height = '200px';
        elm.style.boxShadow = "12px 12px 2px black";
    }
    else{
        elm.style = prev_elm.style;
    }
    prev_elm = elm;
}