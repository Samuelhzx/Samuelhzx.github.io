let input = document.getElementById('randpic');
let button = document.getElementById('submitRandpic');
let replytext = document.getElementById('replytext');

input.focus()
button.addEventListener('click', reply);

function reply() {
	writed = input.value.split(' ')
	if (writed[0] === 'article') {
		if (writed.length === 1) {
			replytext.textContent = '用法：article <人物名>';
		} else {
			replytext.textContent = '有一天，bai和' + writed[1] +
				'一起出去散步。他们度过了愉快的一天，而且没有得新冠，真幸运！';
		}
	} else {
		replytext.textContent = '功能：\narticle\n(randpic还没实现)';
	}
}