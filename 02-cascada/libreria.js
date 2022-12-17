const div = document.getElementById('js');
const p = document.createElement('p');
p.innerText = 'lorem ipsum generated';
p.setAttribute('style','color:blue');
p.setAttribute('class','generated');
p.setAttribute('id','generated');
div.appendChild(p);