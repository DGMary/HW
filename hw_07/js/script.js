//1
console.log(document.querySelector('p').innerText);

//2Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о 
//типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0)
function nodeInfo(node){
    var el = document.querySelector(node);
    return { 'nodeType' : el.nodeType,
             'nodeName' : el.nodeName,
             'countChild' : el.childNodes.length > 0 ? el.childNodes.length :  0
            };
}
console.log(nodeInfo('div'))
console.log(nodeInfo('h1'))
console.log(nodeInfo('body'));

//3
function getTextFromUl(node) {
    let newArr = [],
        nodeUl = document.querySelector(node);
    for(let i = 0; i < nodeUl.children.length; i++){
        newArr.push(nodeUl.children[i].innerText);
    }
    return newArr;
}
console.log(getTextFromUl('ul'));

//4 
function changingParagraphText() {
    let paragraph = document.querySelector('p');
    for (let elem of paragraph.childNodes) {
        elem.nodeValue = '-text-';
    }
}
changingParagraphText();

//5 Найти в коде список ul и добавить класс “list”
let ul = document.querySelector('ul');
ul.classList.add('list');

//6 
var el = document.querySelector('ul').nextSibling,
    i = 1;
while (el) {
    if (el.nodeName == 'A') {
        el.id = "link";
        break;
    }
    el = el.nextSibling;
    i++;
}

//7 
for( let i = 0; i < ul.children.length; i++) {
    if (i % 2 === 0) {
        ul.children[i].classList.add('item')
    }
}

//8 
document.querySelectorAll('a').forEach((el) => el.classList.add('custom-link'));

//9 
function createNewItem() {
    let ul = document.querySelector('ul'),
        newText = 'item' + ' ' + (ul.children.length+1),
        newItem = document.createElement('li');
    newItem.className = 'new-utem';
    newItem.textContent = newText;
    ul.appendChild(newItem);
};
createNewItem();
createNewItem();
 //10 
for (let i = 0; i < ul.children.length; i++) {
    if (ul.children[i].firstChild.nodeName === "A") {
        ul.children[i].firstChild.insertAdjacentHTML('beforeend' , '<strong> </strong>')
    }
}

//11 
let myImg = document.createElement('img');
myImg.alt = 'Img';
myImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/%D0%A1%D0%BE%D1%81%D0%BD%D0%B0-%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8.jpg/266px-%D0%A1%D0%BE%D1%81%D0%BD%D0%B0-%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8.jpg"
document.body.insertAdjacentElement('afterbegin' , myImg)

//12 
let makrEl = document.querySelector('mark');
makrEl.insertAdjacentText('beforeend', 'green');
makrEl.className = 'green';

//13 Отсортировать li внутри списка в обратном порядке (по тексту внутри)
function sortingList() {
    let list = document.querySelector('ul'),
        listChild = list.children,
        itemsArr = [];

    for (let el in listChild) {
        if (listChild[el].nodeType == 1) {
            itemsArr.push(listChild[el]);
        }
    }
    itemsArr.sort(function(a, b) {
        return (b.innerHTML - a.innerHTML) ? 0 : (b.innerHTML > a.innerHTML ? 1 : -1);
    })
    for (let i = 0; i < itemsArr.length; ++i) {
        list.appendChild(itemsArr[i]);
    }
}
sortingList();











