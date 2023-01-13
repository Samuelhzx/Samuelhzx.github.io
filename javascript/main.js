let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hi there!';

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === '../images/ou.svg') {
        myImage.setAttribute('src', '../images/yan.svg');
    } else if (mySrc === '../images/yan.svg') {
        myImage.setAttribute('src', '../images/liu.svg');
    } else {
        myImage.setAttribute('src', '../images/ou.svg');
    }
}
const para = document.getElementById("name");

para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('输入名字：');
    if (name == "") {
        para.textContent = '无名大侠';
    }
    else if (name !== null) {
        para.textContent = name;
    }
}
