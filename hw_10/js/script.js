 //Создайте функцию которая бы умела делать:  Подсказка, функция minus должна возвращать другую функцию.
function minus(num1){
  num1 = num1 || 0;
  return (num2) => { num2 = num2 || 0; num1 - num2 } 
}

minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0

//Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function MultiplyMaker(num1) {
  return function(num2){
      num1 = num1 * num2;
      return console.log(num1);
  }

}
const multiply = MultiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)

// Реализовать модуль, который работает со строкой и имеет методы:
//     a. установить строку
//     i. если передано пустое значение, то установить пустую строку
//     ii. если передано число, число привести к строке
//     b. получить строку
//     c. получить длину строки
//     d. получить строку-перевертыш
//     Пример:
//     модуль.установитьСтроку(‘abcde’);
//     модуль.получитьСтроку(); // ‘abcde’
//     модуль.получитьДлину(); // 5
const str = (function () {
  let _str = "";
  
  function setStr(value) { 
    if(value) {
      _str = value.toString();
    } else {
      _str = "";
    }
  }
  
  function getStr() {     
    return _str;
  }

  function getLengthStr() {     
    return _str.length;
  }
  function getReverseStr() {     
    return _str.split('').reverse().join('');
  }

  return {
      setStr : setStr,
      getStr : getStr,
      getLengthStr : getLengthStr,
      getReverseStr : getReverseStr
  };
}());

// Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. 
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)            
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calculator = (function () {
  let _value = 1;
  
  function setVal(value) { 
    this._value = value; 
    return this;
  }
  
  function addVal(val) {     
    this._value += val;
    return this;
  }
  function powVal(val){
   this._value = Math.pow(this._value, val);
    return this;
  };

  function multiplyVal(val) {     
    this._value *= val;
    return this;
  };

  function getVal() { 
    return this._value.toFixed(2);
  };

  return {
      setVal : setVal,
      addVal : addVal,
      multiplyVal : multiplyVal,
      getVal : getVal,
      powVal: powVal
  };
}());
console.log(calculator.setVal(10).powVal(2).getVal()); //100

//Class

// Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины.
// Конструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2014 (2016-2);
// Марка машины всегда должна возвращаться с большой буквы
function Car(model , age){
  this.model = model;
  this.age = age;
  this.getModel = function (){
    return this.model[0].toUpperCase() + this.model.slice(1);
  };
  this.getNewYear = function (){
    return (new Date().getFullYear() - this.age);
  }
}
const mazda = new Car("mazda" , 20);
var lexus = new Car('lexus', 2)
mazda.getModel();
mazda.getNewYear();
lexus.getModel();
lexus.getNewYear();


//Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, 
//или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получает строку 
//и имеет следующие методы:
//   a. показать оригинальную строку
// b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.      

function Encrypt(str){
  this.str = str;
  this.showStr = function(){
    return this.str;
  };
  this.showNewStr = function(){
    let newStr = this.str.split('').reverse().join('');
    return newStr;
  }
  this.showNewStrEncrypt = function(){
    let newStr = '';
    for(let i = 0; i < this.str.length; i++) {
      newStr += this.str[i].charCodeAt()
    }
    return newStr;
  }
}
let newStr1 = new Encrypt('Hello')
console.log(newStr1.showStr());
console.log(newStr1.showNewStr());
console.log(newStr1.showNewStrEncrypt())
