const namebutton = document.getElementById("rename");
const title = document.getElementById('title');
const htmltitle = document.querySelector('title');
const removename = document.getElementById('removename');

htmltitle.textContent = '个人主页';

namebutton.addEventListener('click', updateName);

function updateName() {
	let name = prompt('输入昵称：');
	if (name == "") {
		name = '无名大侠';
	}
	if (name !== null) {
		localStorage.setItem('name', name);
		title.textContent = name;
		htmltitle.textContent = name + '的个人主页';
	}
}

if (localStorage.getItem('name')) {
	let storedName = localStorage.getItem('name');
	title.textContent = storedName;
	htmltitle.textContent = storedName + '的个人主页';
}

removename.addEventListener('click', removeName);

function removeName() {
	const ask = confirm('确定注销？')
	if (ask) {
		localStorage.removeItem('name');
		title.textContent = '无名大侠';
		htmltitle.textContent = '个人主页';
	}
}