//1 
let btn = document.getElementById('btn-msg'),
    btnGenerate = document.getElementById('btn-generate'),
    tag = document.getElementById('tag');

btn.addEventListener('click' , function() {
    alert(this.getAttribute('data-text'))
})

//2 
btn.onmouseover = function(event) {
    event.target.classList.add('hover');
  };
 
btn.onmouseout = function(event) {
     event.target.classList.remove('hover');
};

//3 
document.addEventListener('click' , function(){   
    tag.innerText = event.target.tagName;
})

//4 
btnGenerate.addEventListener('click' , function(){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerText = 'Item' + ' ' +(ul.children.length + 1);
    ul.appendChild(li);
});

//5 Из проекта todo реализовать редактирование задачи. (На занятии в конце второй части было пояснение).
