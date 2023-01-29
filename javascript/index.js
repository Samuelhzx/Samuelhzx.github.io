//img
const myImage = document.getElementById("huang-img");

myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === '../media/ou.svg') {
		myImage.setAttribute('src', '../media/yan.svg');
	} else if (mySrc === '../media/yan.svg') {
		myImage.setAttribute('src', '../media/liu.svg');
	} else {
		myImage.setAttribute('src', '../media/ou.svg');
	}
}

//name,denglu
if (localStorage.getItem('name')) {
	let storedName = localStorage.getItem('name');
	
	const title = document.getElementById('title');
	title.textContent = '欢迎回来，' + storedName;
	const wode = document.getElementById('name');
	wode.textContent = storedName;
}