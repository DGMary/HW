let a = 0 || 'string';
console.log(a);
/**
 * оператор ИЛИ вычисляет ровно столько значений, сколько необходимо – до первого true.
 * оператор ИЛИ возвращает то значение, на котором остановились вычисления. 
 * вернет "string"
 */

let b = 1 && 'string';
console.log(b);
/**
 *  возращает первое ложное, а если его нет то последнее значение
 *  вернет "string"
 */

let c = null || 25;
console.log(c);
/**
 * вернет 25, т.к. null -> false
 */

let d = null && 25;
console.log(d);
/**
 * вернет null т.к. возвращает первое ложное выражение
 */

let e = null || 0 || 35;
console.log(e);
/**
 * вернет 35 т.к. null и 0 -> false
 */

let g = null && 0 && 35;
console.log(g);
/**
 * вернет null т.к. null-> false
 */

// Что отобразится в консоли. Почему?

console.log(12 + 14 + '12');
/**
 * сначало отработает сложение 12+14=26
 * далее сложение со строкой приведет знаечние к строке 2612
 */

console.log(3 + 2 - '1');
/**
 * отрабатывает сложение 3+2
 * далее - преобразует сроку в число получим 5 - 1 = 4
 * ответ 4
 */

console.log('3' + 2 - 1);
/**
 * сложение строки с числом -> получаем строку 32
 * строка минус число приведет строку к числу получаем 32-1
 * ответ 31
 */

console.log(true + 2);
/**
 * true преобразуется в 1
 * 1+2
 * ответ 3
 */

console.log(+'10' + 1);
/**
 * плюс преобразует строку в число 10
 * 10 + 1 
 * ответ 11
 */

console.log(undefined + 2);
/**
 * 
 * ответ NaN
 */
console.log(null + 5);
/**
 * null -> 0
 * 0+5
 * ответ 5
 */

console.log(true + undefined);
/**
 * ответ NaN
 */


//Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let variable;

if(variable == 'hidden') {
    variable = 'visible';
} else {
    variable = 'hidden';
}

// Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let variable2;
if(variable2 == 0) {
    variable2 = 1
} else if (variable2 < 0) {
    variable2 = 'less then zero';
} else if (variable2 > 0) {
    variable2 *=10;
}


// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и 
//свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = { 
    name: 'Lexus', 
    age: 10, 
    create: 2008, 
    needRepair: false 
}
if (car.age < 5) {
    console.log('Need Repair');
    car.needRepair = 'true';
} else {
    car.needRepair = 'false';
}

// 4.Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, 
//обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
let item = { 
    name: 'Intel core i7', 
    price: '100$', 
    discount: '15%' 
}
if(item.hasOwnProperty('discount') && item.discount != '') {
    item.priceWithDiscount = parseInt(item.price) + ((parseInt(item.price) * parseInt(item.discount))/100);
    console.log('Price with discount: ' + item.priceWithDiscount);
} else {
    console.log('Price:' + item.price);
}



// 6.Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене
// то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
if(parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log(product.name);
} else {
    console.log('товаров не найдено');
}

