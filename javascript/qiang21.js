const qiangSubmit = document.getElementById('qiangSubmit');
const qiangInput = document.getElementById('qiangInput');
const botFirstReply = document.querySelector('.botreply');
const bot = document.getElementById('bot');
const jishu = document.getElementById('jishu');
let wrong = 0;
let num = 1;
jishu.textContent = num;
let playerName = '无名大侠';
if (localStorage.getItem('name')) {
    playerName = localStorage.getItem('name');
}
//playerName += ':'

botFirstReply.textContent = '我先说，1';
qiangSubmit.addEventListener('click', submitFunction);

function submitFunction() {
    let replynum = Number(qiangInput.value);

    let playerNameDisplay = document.createElement('p');
    let playerSubmit = document.createElement('p');
    playerSubmit.className = 'reply';
    playerNameDisplay.style.textAlign = 'right';
    playerNameDisplay.textContent = playerName;
    playerSubmit.textContent = qiangInput.value;
    bot.appendChild(playerNameDisplay);
    bot.appendChild(playerSubmit);

    bot.innerHTML += '<br><br>'

    let botNameDisplay = document.createElement('p');
    let botSubmit = document.createElement('p');
    botSubmit.className = 'botreply';
    botNameDisplay.textContent = '机器人';
    bot.appendChild(botNameDisplay);

    if (replynum >= 1 && replynum <= 3 && replynum % 1 === 0) {
        num += replynum;
        let botReplyNumber = 4 - (num - 1) % 4;
        botSubmit.textContent = botReplyNumber;
        num += botReplyNumber;
        jishu.textContent = num;
    } else {
        wrong += 1;
        if (wrong === 10) {
            botSubmit.textContent = '再这样我不玩了';
        } else if (wrong === 11) {
            botSubmit.textContent = '我不玩了';
            botSubmit.textContent = '再见';
            qiangInput.disabled = true;
            qiangSubmit.disabled = true;
        } else if (Math.random() < 1 / 3) {
            botSubmit.textContent = '输入不符合规则';
        } else if (Math.random() < 1 / 2) {
            botSubmit.textContent = '故意找茬是不是？';
        } else {
            botSubmit.textContent = '你玩不玩吧';
        }

    }
    bot.appendChild(botSubmit);

    if (num === 21) {
        botNameDisplay = document.createElement('p');
        botSubmit = document.createElement('p');
        botSubmit.className = 'botreply';
        botNameDisplay.textContent = '机器人';
        botSubmit.textContent = '我赢了';
        bot.appendChild(botNameDisplay);
        bot.appendChild(botSubmit);
        qiangInput.disabled = true;
        qiangSubmit.disabled = true;
    }
    bot.scrollTop = bot.scrollHeight;
}