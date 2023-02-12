const input = document.getElementById('randpic');
const button = document.getElementById('submitRandpic');
const replytext = document.getElementById('replytext');

input.focus();
button.onclick = reply;

function reply() {
	//处理文本
	let writed = input.value.split(' ');
	for (i = 0; i < writed.length; i++) {
		if (writed[i] === '') {
			writed.splice(i, 1);
			i--;
		}
	}

	if (writed[0] === '压缩毛巾') {

		if (writed.length !== 3) {
			replytext.textContent = '用法：压缩毛巾 名称 不是什么。如: 压缩毛巾 饼干 压缩毛巾';

		} else {
			replytext.textContent = '什么，这不是' + writed[1] + '，我们这个' + writed[2] + '体积小方便携带，拆开一包，\
							放水里就变大，怎么扯都扯不坏，用来擦脚，擦脸，擦嘴都是很好用的，你看打开以后像圆饼一样大小，\
							放在水里遇水变大变高，吸水性很强的。打开以后，是一条加大加厚的毛巾，你看他怎么挣都挣不坏，\
							好不掉毛不掉絮，使用七八次都没问题，出差旅行带上它非常方便，用它擦擦脚，再擦擦嘴，\
							擦擦脸，干净卫生。什么 ? 在哪里买 ? 下方小黄车，买五包送五包，还包邮';
		}

	} else if (writed[0] === '小编体') {
		replytext.textContent = writed.length;
		if (writed.length !== 4) {
			replytext.textContent = '用法: 小编体 主语 谓语 换种说法\
			如: 小编体 数学 是人类的发明还是发现 是否为人类所创造';

		} else {
			replytext.textContent = writed[1] + writed[2] + '是怎么回事呢？' + writed[1] + '相信大家都很熟悉，\
			但是'+ writed[1] + writed[2] + '是怎么回事呢，下面就让小编带大家一起了解吧。' + writed[1] + writed[2] + '，\
			其实就是'+ writed[1] + writed[3] + '，大家可能会很惊讶' + writed[1] + '怎么会' + writed[2] + '呢？但事实就是这样，小编也感到\
			非常惊讶。这就是关于'+ writed[1] + writed[2] + '的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！';
		}
	} else {
		replytext.textContent = '功能：\n压缩毛巾\n小编体\n(randpic还没实现)';
	}
}