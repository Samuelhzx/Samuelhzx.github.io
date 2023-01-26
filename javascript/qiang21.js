const qiangSubmit = document.getElementById('qiangSubmit');
const qiangInput = document.getElementById('qiangInput');
const botFirstReply = document.querySelector('.botreply');
const bot = document.getElementById('bot');
const jishu = document.getElementById('jishu');

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

    let kong = document.createElement('br');
    bot.appendChild(kong);

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
        botSubmit.textContent = '输入不符合规则';
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
    }
}