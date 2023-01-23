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
if (localStorage.getItem('name')) {
	const title = document.getElementById('title');
	let storedName = localStorage.getItem('name');
	title.textContent = '欢迎回来，' + storedName;
	namebutton.textContent = storedName;
}