const qiangSubmit = document.getElementById('qiangSubmit');
const qiangInput = document.getElementById('qiangInput');
const reply = document.createElement('p');
let num = 1;
const jishu = document.getElementById('jishu');
jishu.textContent = num;

reply.textContent = '我先说，1';
qiangSubmit.addEventListener('click', submitFunction);

function submitFunction() {
    num += Number(qiangInput.value);
    jishu.textContent = num;
}