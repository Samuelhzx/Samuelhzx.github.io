let clipboardObj = navigator.clipboard;
let o = document.querySelector('.output');//非这样不可
let input;
if (clipboardObj) {
	$(".btn").on('click', async function () {
		await navigator.clipboard.writeText(o.innerText)
	})
}

$('textarea').on('keyup', () => {
	input = document.querySelector('textarea').value;
	o.innerText = input;
})