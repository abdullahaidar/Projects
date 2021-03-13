let input = document.getElementById('input');
let btn = document.getElementById('btn');
let ulList = document.getElementById('ul-list');


function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function addColor() {

    let list = document.createElement('li');
    let spanX = document.createElement('button');
    let spanText = document.createElement('span');
    ulList.appendChild(list);
    list.appendChild(spanX);;
    list.appendChild(spanText);
    list.style.backgroundColor = randomColor();
    spanX.innerText = 'X';
    spanText.innerText = randomColor()
    spanX.classList.add('close');
    spanText.classList.add('hex-text');

    spanX.addEventListener('click', function () {
        list.remove()
    })

    function init() {
        // THIS IS NOT WORKING / I DON'T UNDERSTAND HOW OR WHAT
    }
}