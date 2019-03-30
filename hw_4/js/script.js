//1
function multiply () {
    let res = 1;    

    if (arguments.length === 0){
        return 0;
    } else {
        for (let i = 0; i < arguments.length; i++) {           
            res *= arguments[i]
        }
        return res;
    }
    
}
console.log(multiply());
console.log(multiply(1,2,3));
console.log(multiply(1, 5));

//2 
function reverseString(str){
    let newStr = '';
    for (let i = 1; i <= str.length; i++){
        newStr += str[str.length - i];
    }
    console.log(newStr);
    return newStr;
}
reverseString('test');
reverseString('Hello world!');

//3 
function getCodeStringFromText(str){
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        newStr += str.charCodeAt(i) + " ";
    }
    console.log(newStr);
    return newStr;
}
getCodeStringFromText('hello');

// 4
function guessNum(num) {
    let randomNum = parseInt(Math.random()*10);
    if (num > 10 || num < 0 ) {
        console.log ('укажите число от 0 до 10');
    } else {
        if (num == randomNum) {
            console.log('Вы выиграли');
            return 'Вы выиграли';
        } else {
            console.log('Вы не угадали ваше число '+ num +' а выпало число ' + randomNum);
            return 'Вы не угадали ваше число 8 а выпало число 5';
        }
    }
}
guessNum(6);
guessNum(90);
guessNum(2);

// 5 
function getArray(n){
    let newArr = [];
    for (let i = 1; i <= n; i++){
        newArr.push(i);
    }
    console.log(newArr);
    return newArr;
}
getArray(10);
getArray(12);

// 6 
function doubleArray(arr){
    let newArr = arr.concat(arr);
    console.log(newArr);
    return newArr;
}
doubleArray([1,2,3]);
doubleArray([1,2,3,6,9]);

// 7 
function changeCollection() {
    let newArr = [];    
    for (let elem of arguments) {
        elem.splice(0,1);
        newArr.push(elem);
    }    
    console.log(newArr);
    return newArr;
}
changeCollection([1,2,3], ['a', 'b', 'c']);
changeCollection([1,2,3]);

// 8 
let users = [{
    name: 'Denis',
    age: 29,
    'gender': 'male'
},{
    name: 'Ivan',
    age: 20,
    'gender': 'male'
},{
    name: 'Eva',
    age: 24,
    'gender': 'female'
},{
    name: 'Jennifer',
    age: 25,
    'gender': 'female'
}];

function funcGetUsers(users, userKey, userVal){   
    if (typeof users !== 'object' || users == undefined) return console.log('error');
    if (userKey == undefined) return console.log('error');
    if (userVal == undefined) return console.log('error');

    let newUsers = [];
    for(let i = 0; i < users.length; i++) {
        if(users[i][userKey] == userVal) {            
            newUsers.push(users[i]);
        }  
    } 
    console.log(newUsers);
    return newUsers;
}
funcGetUsers(users, 'gender', 'female');
funcGetUsers(users, 'gender', 'male');
funcGetUsers(users, 'age', '25');
funcGetUsers(users, '25');


function funcGetUsers1(users, usersKey, usersValue) {
    if (typeof users !== 'object' || users == undefined) return console.log('error');
    if (usersKey == undefined) return console.log('error');
    if (usersValue == undefined) return console.log('error');
    
    let keys, values, sortUsers = [];

    for (let key of users) {
        keys = Object.keys(key);
        values = Object.values(key);
        for (let i in key) {    
            if (i == usersKey && key[i] == usersValue) {
                sortUsers.push(key);
            }
        }
    }
    return sortUsers;
}
console.log(funcGetUsers1(users, 'gender', 'male'))