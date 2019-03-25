// Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
let a;
switch(a){
    case ( 'block') :
        console.log('block');
        break;
    case ('none') :
        console.log('none');
        break;
    case ('inline') :
        console.log('inline');
        break;
    default : console.log('other');    
}


// Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.
//1.1 Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”
let myVar = 'hidden';
myVar === 'hidden' ? myVar = 'visible' : myVar = "hidden";

//1.2  если переменная равна нулю, присвоить ей 1;
//  если меньше нуля - строку “less then zero”;
//  если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let variable = 2;
variable === 0 ? variable = 1 : variable < 0 ? variable = "less then zero" : variable *= 10;

//1.3 Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и 
//свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = { 
    name: 'Lexus', 
    age: 10, 
    create: 2008, 
    needRepair: false 
}

car.age > 5 ? (console.log('need Repair'), car.needRepair = true)  : car.needRepair = false;

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.
let str = 'i am in the easycode'.split(' '),
    newStr = '';

for ( let i = 0; i < str.length; i++) {
    newStr += str[i][0].toLocaleUpperCase() + str[i].slice(1) + " ";
}
console.log(newStr);


// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш 
//(то есть последняя буква становится первой, предпоследняя - второй итд).
let str1 = 'tseb eht ma i',
    newStr1 = '';
for (let i = 0; i < str1.length; i++) {  
    newStr1 += str1[str1.length - 1 - i];
}
console.log(newStr1);

let someString = 'tseb eht ma i';
let someStringNew = '';
for (let i = someString.length - 1; i >= 0; i--) {
    someStringNew += someString[i];
}
console.log(someStringNew);


// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
let factorial = 1;
let num = 10;
for (let i = 2; i <= num + 1; i++) {
    factorial *= (i-1);
}
console.log(factorial);


// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
let str2 = 'JavaScript is a pretty good language'.split(' '),
    newStr2 = "";
for(let i = 0; i < str2.length; i++){
 newStr2 += str2[i][0].toUpperCase() + str2[i].slice(1);
}
console.log(newStr2);

let stringJS = 'JavaScript is a pretty good language';
let newStringJS = '';
let newStringJSWithoutSpaces = '';
for (let i = 0; i < stringJS.length; i++) {
    newStringJS += stringJS[i - 1] == ' ' ? stringJS[i].toUpperCase() : stringJS[i];
}
for (let i = 0; i < newStringJS.length; i++) {
    newStringJSWithoutSpaces += newStringJS[i] == ' ' ? '' : newStringJS[i]
}
console.log(newStringJSWithoutSpaces);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. 
//Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value  of arr) {
    if(value % 2 != 0) {
        console.log(value);
    }
}

let oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of oddNumbers) {
    value % 2 === 1 ? console.log(value) : '';
}


// 6. Дан объект:  Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}
 for (let val in list) {    
    if (typeof(list[val]) === 'string') {
        console.log(list[val] = list[val].toUpperCase());
    }
 }


