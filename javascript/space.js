const namebutton = document.getElementById("name");
const title = document.getElementById('title');
const htmltitle = document.querySelector('title');

namebutton.addEventListener('click', updateName);

function updateName() {
	let name = prompt('输入昵称：(温馨提示：目前无法注销)');
	if (name == "") {
		name = '无名大侠';
	}
	if (name !== null) {
		localStorage.setItem('name', name);
		title.textContent = name;
        htmltitle.textContent = name+'的个人主页';
	}
}

if (localStorage.getItem('name')) {
	let storedName = localStorage.getItem('name');
	title.textContent = storedName;
    htmltitle.textContent = storedName+'的个人主页';
}
