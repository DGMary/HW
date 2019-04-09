//1
console.log(document.head);
console.log(document.body);
console.log(document.body.children);
console.log(document.body.querySelector('div'));
console.log(document.body.firstElementChild.children);
let divChild = [];
let divChildAll = document.body.querySelector('div').children;
for (var i = 1; i < divChildAll.length - 1; i++) {
    divChild.push(divChildAll[i]);
}
console.log(divChild);
//2
function isParent(parent , child) {
    return console.log(!!child.closest(parent.tagName));
}
//isParent(parent, child);
isParent(document.body.children[5], document.querySelector('mark'));// true так как первый див является родительским элементом для mark
isParent(document.querySelector('ul'), document.querySelector('mark'));// false так ul НЕ является родительским элементом для mark 

//3
// allLinks = document.links;
let allLinks = document.body.querySelectorAll('a');
let selectedLinks = [];
for (var i = 0;i < allLinks.length; i++) {
    if(allLinks[i].closest('ul')) {
        selectedLinks.push(allLinks[i]);
    }
}
console.log(selectedLinks);
//4
console.log(document.querySelector('ul').previousElementSibling);
console.log(document.querySelector('ul').nextElementSibling);
//5
console.log(document.querySelectorAll('ul > li').length);
//6