//img
let myImage = document.getElementById("huang-img");

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

//name
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

function changecolor(id) {
    const getin = document.getElementById(id);
    getin.style.background = "rgba(0, 256, 256, 0.3)";
}
function changeback(id) {
    const getin = document.getElementById(id);
    getin.style.background = "rgba(0, 0, 200, 0.3)";
}