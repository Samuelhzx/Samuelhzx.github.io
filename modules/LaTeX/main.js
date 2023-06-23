let clipboardObj = navigator.clipboard;
let o = document.querySelector('.output');//非这样不可
o.disabled = true;
let input;
if (clipboardObj) {
	$(".copy").on('click', async function () {
		await navigator.clipboard.writeText(o.innerText)
	})
}

$('textarea').on('keyup', () => {
	let input = document.querySelector('textarea').value;
	if (input !== "") {
		o.innerText = input;
		mathjaxfy(input);
	} else {
		o.innerText = '输出区域';
		$('.mathjaxed').text('\\(\\text{Powered by}\\) ');
		$('.mathjaxed').append('<a href="https://www.osgeo.cn/mathjax/" target="_blank">\\(\\text{Mathjax}\\)</a>')
		MathJax.typeset();
	}
})

function mathjaxfy(text) {
	$('.mathjaxed').text('\\('+text+'\\)');
	MathJax.typeset();
}