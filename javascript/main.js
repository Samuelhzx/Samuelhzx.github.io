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

//name,denglu
const namebutton = document.getElementById("name");
const title = document.getElementById('title');
namebutton.addEventListener('click', updateName);

function updateName() {
	let name = prompt('输入昵称：(温馨提示：目前无法注销)');
	if (name == "") {
		name = '无名大侠';
	}
	if (name !== null) {
		namebutton.textContent = name;
		localStorage.setItem('name', name);
		title.textContent = 'hello, ' + name;
	}
}

if (localStorage.getItem('name')) {
	let storedName = localStorage.getItem('name');
	title.textContent = '欢迎回来，' + storedName;
	namebutton.textContent = storedName;
}
