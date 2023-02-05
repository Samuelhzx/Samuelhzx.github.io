const sbbgc = document.getElementById('sbbgc');
const body = document.querySelector('body');
const wbbgc = document.getElementById('wbbgc');
const dbbgc = document.getElementById('dbbgc');

if (localStorage.getItem('bbgc')) {
	wbbgc.value = localStorage.getItem('bbgc');
	body.style.backgroundColor = localStorage.getItem('bbgc');
}

sbbgc.onclick = function fsbbgc() {
	let val = wbbgc.value;
	body.style.backgroundColor = val;
	localStorage.setItem('bbgc', val);
}

dbbgc.onclick = function fdbbgc() {
	body.style.backgroundColor = 'blanchedalmond';
	localStorage.removeItem('bbgc');
}