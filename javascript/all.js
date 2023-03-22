if (localStorage.getItem('bbgc')) {
    const body = document.querySelector('body');
    body.style.backgroundColor = localStorage.getItem('bbgc');
}

const btn = document.querySelectorAll('button');
for (let butn of btn) {
    butn.onmousedown=()=>butn.style.borderColor='#000 var(--rice-white) var(--rice-white) #000';
    butn.onmouseup=()=>butn.style.borderColor='var(--rice-white) #000 #000 var(--rice-white)';
}