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
    function botsay(word) {
        let botNameDisplay = document.createElement('p');
        let botSubmit = document.createElement('p');
        botSubmit.className = 'botreply';
        botNameDisplay.textContent = '机器人';
        botSubmit.textContent = word;
        bot.appendChild(botNameDisplay);
        bot.appendChild(botSubmit);
    }
    function end() {
        qiangInput.disabled = true;
        qiangSubmit.disabled = true;
        qiangSubmit.onmouseover = bubian();
        function bubian() {
            qiangSubmit.style.backgroundColor = 'rgba(0, 200, 200, 1)';
            qiangSubmit.style.cursor = 'not-allowed';
            qiangSubmit.style.boxShadow = '0px 0px 0px';
        }
    }
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

    let botReplyWord = ''

    if (replynum >= 1 && replynum <= 3 && replynum % 1 === 0) {
        num += replynum;
        let botReplyNumber = 4 - (num - 1) % 4;
        botReplyWord = botReplyNumber;
        num += botReplyNumber;
        jishu.textContent = num;
    } else {
        wrong += 1;
        if (wrong === 10) {
            botReplyWord = '再这样我不玩了';
        } else if (wrong === 11) {
            botReplyWord = '我不玩了，再见';
            end();
        } else if (Math.random() < 1 / 3) {
            botReplyWord = '输入不符合规则';
        } else if (Math.random() < 1 / 2) {
            botReplyWord = '故意找茬是不是？';
        } else {
            botReplyWord = '你玩不玩吧';
        }

    }
    botsay(botReplyWord);
    if (num === 21) {
        botReplyWord = '我赢了';
        botsay(botReplyWord);
        end();
    }

    bot.scrollTop = bot.scrollHeight;
}