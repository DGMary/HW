// Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
const sum = (...props) => {
  const params = Array.prototype.slice.call(props);
  if (!params.length) return 0;
  return params.reduce( (prev, next) => { return prev + next });
}                
sum(1, 2, 3, 4); // 10
sum(); // 0

//Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {
  width: 10, 
  height: 15, 
  getSquare: function() {return this.width * this.height}
};
rectangle.getSquare();

//Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
    getPrice : function(){return this.price},
    getPriceWithDiscount :  function(){return this.price - (this.price / 100 * parseFloat(this.discount))}
};
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5

//Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:
const object = {
  height : 0,
  inc : function(){
    this.height = this.height + 1; 
    return this.height
  }
}
object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11;
object.inc(); // придумать свое название для метода
object.height; // 12;

//Создать объект “вычислитель”, у которого есть числовое свойство  “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () {this.value = this.value * 2 ; return this},
    plusOne: function () {this.value = this.value + 1 ; return this},
    minusOne: function () {this.value = this.value - 1 ; return this},
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value; // 3

//Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости
//всех товаров (цена * количество продуктов)
const product = {
  price : 10,
  countProduct : 4,
  totalPrice : function(){return this.price * this.countProduct}
}
product.totalPrice();

//Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для
//второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого 
//“позаимствуйте” метод из предыдущего объекта.
const product1 = {
  price : 20,
  countProduct : 5
}
product.totalPrice.call(product1);


//Даны объект и функция: Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
let sizes = {
  width: 5, 
  height: 10
}
getSquare = function () {return this.width * this.height};
getSquare.call(sizes)

//Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
let element = {
  height: 25,
  getHeight: function () {return this.height;}
};      
let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // undefined
        
