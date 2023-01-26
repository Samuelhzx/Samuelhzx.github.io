const qiangSubmit = document.getElementById('qiangSubmit');
const qiangInput = document.getElementById('qiangInput');
const reply = document.querySelectorAll('.reply');
const botReply = document.querySelector('.reply');
const bot = document.getElementById('bot');
let num = 1;
const jishu = document.getElementById('jishu');
jishu.textContent = num;

let playerName = '无名大侠'
if (localStorage.getItem('name')) {
    playerName = localStorage.getItem('name');
}
playerName += ':'

botReply.textContent = '我先说，1';
qiangSubmit.addEventListener('click', submitFunction);

function submitFunction() {
    num += Number(qiangInput.value);
    jishu.textContent = num;
    let playerNameDisplay = document.createElement('p');
    let playerSubmit = document.createElement('p');
    playerSubmit.className = 'reply';
    playerNameDisplay.textContent = playerName;
    playerSubmit.textContent = qiangInput.value;
    bot.appendChild(playerNameDisplay);
    bot.appendChild(playerSubmit);
    
}