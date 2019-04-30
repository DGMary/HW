//Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }
// const comp = new Component('span');

class Component1 {
  constructor (tagName) {
    this.tagName = tagName || 'div';
    this.node = document.createElement(tagName);
  }
};
const comp = new Component1('span');
const comp1 = new Component1();

//Реализовать конструктор и методы в ES6 синтаксисе:
// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }
   

// Component.prototype.setText = function (text) { 
//   this.node.textContent = text;
// }
// const comp2 = new Component('p');
// comp2.setText = 'text123';

class Component2  {
  constructor (tagName) {
    this.tagName = tagName || 'div';
    this.node = document.createElement(tagName);
  }
  setText(text) { 
    this.node.textContent = text;
  }
}

const comp3 = new Component2('p');
comp3.setText = 'text12345';
        



//Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. 
//Также у него должны быть 
//геттер и сеттер для получения и установки текущего числа с которым производятся вычисления
class Calculator {
  constructor(value) {
    this._value = value;
  }
  add(num) {
    return this._value += num;
  }
  minus(num) {
    return this._value -= num;
  }
  multiply(num) {
    return this._value *= num;
  }
  division(num) {
    return this._value /= num;
  }
  get num() { return  this._value; }
  set num(value1) { this._value = value1;}
}
const calc = new Calculator(2);
calc.add(12);
calc.num = 42;
calc.num



