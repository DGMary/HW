const body = document.body;
const main = document.querySelector('main');
const formCol = document.querySelector('.form-col');
const btn = document.querySelector('.btn');

// function handler1(e) {
//   e.preventDefault();
//   console.log('click 1');
// }

// function handler2(e) {
//   e.preventDefault();
//   console.log('click 2');
// }

// btn.addEventListener('click', handler1);
// btn.addEventListener('click', handler2);

// btn.removeEventListener('click', handler1);

function handlerBody(e) {
  console.log('body');
}

function handlerMain(e) {
  console.log('main');
}

function handlerFormCol(e) {
  console.log('form-col');
}

function handlerBtn(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log('btn');
}

function handlerBtn2(e) {
  e.preventDefault();
  console.log('btn 2');
}

// body.addEventListener('click', handlerBody, true);
// main.addEventListener('click', handlerMain, true);
// formCol.addEventListener('click', handlerFormCol, true);
// btn.addEventListener('click', handlerBtn, true);

body.addEventListener('click', handlerBody);
main.addEventListener('click', handlerMain);
formCol.addEventListener('click', handlerFormCol);
btn.addEventListener('click', handlerBtn);
btn.addEventListener('click', handlerBtn2);












