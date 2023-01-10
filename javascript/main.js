let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/*
document.querySelector("html").addEventListener("click", function () {
    alert("别点");
});
*/

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
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('输入名字：');
  para.textContent = '你好，' + name;
}
