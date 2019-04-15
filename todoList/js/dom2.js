const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', () => {
        console.log('Li was clicked');
    });
}


// Без погружения
ul.addEventListener('click', (event) => {
    console.log('Ul was clicked');
});

// С погружением
ul.addEventListener('click', handler);