//1.1
function firstFunc(arr,  handler1){   
    let newStr = '';
    for(let i = 0; i < arr.length; i++){        
        newStr += handler1(arr[i]); 
    }    
    return 'New value: ' + newStr;
}
function handler1(el) {  
    return (el[0].toUpperCase() + el.slice(1))
}
console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

//1.2
function firstFunc(arr,  handler2){   
    let newStr = '';
    for(let i = 0; i < arr.length; i++){        
        newStr += handler2(arr[i]); 
    }    
    return 'New value: '+ newStr;
}
function handler2(el) {  
    return (el + "0, ");
}
console.log(firstFunc([10,20,30], handler2));

//1.3
function firstFunc(arr,  handler3){   
    let newStr = '';
    for(let i = 0; i < arr.length; i++){        
        newStr += handler3(arr[i]); 
    }    
    return 'New value: '+ newStr;
}
function handler3(el) { 
    return el['name'] +' is ' + el['age']+', ';
}
console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

//1.4
function firstFunc(arr,  handler4){   
    let newStr = '';
    for(let i = 0; i < arr.length; i++){        
        newStr += handler4(arr[i]); 
    }    
    return 'New value: '+ newStr;
}
function handler4(el) { 
    return el.split('').reverse().join('') + ', ';
}
console.log(firstFunc(['abc', '123'], handler4));

//2
function myEvery(arr , handlerEvery){
    if (!Array.isArray(arr)) return 'First parameter must be Array';

    for(let i = 0; i < arr.length; i++) {       
        if(handlerEvery(arr[i]) == false){          
        return false;
        } else {
            return true;
        }    
    }
}
function handlerEvery(el){
    return el > 5;
}
console.log(myEvery([90,1,22,4,3] , handlerEvery));

//3
let arr = [1,2,3,5,8,9,10];
function arrInfo(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){       
        if (arr[i] % 2 == 0) {
            newArr.push({'digit': arr[i] , 'odd': false});
        } else {
            newArr.push({'digit': arr[i] , 'odd': true});
        }          
    }
    return newArr;
}
console.log(arrInfo(arr));
console.log(arrInfo([1,4,6,8,0]));

//4
function arrHasNull(el){   
    return el != 0;
}
console.log([1,2,3,5,8,0,9,10].every(arrHasNull));
console.log([1,4,6,8].every(arrHasNull));
console.log([1,4,6,8, 0].every(arrHasNull));

//5
function arrHasBigWord(el){  
    return el.length > 3
}
console.log(['yes', 'hello', 'no', 'easycode', 'what'].some(arrHasBigWord));
console.log(['yes'].some(arrHasBigWord));
console.log(['ye', 'no'].some(arrHasBigWord));

//6
let infoStr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, 
{char:"p",index:2}, {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, 
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
function returnStr (arr) {
    let newStr = arr.sort(function(prev, next){
        return prev.index - next.index;
    }); 
    let reduceRes = newStr.reduce(function(prev, current) {
        return prev += current.char ;
    }, ''); 
    return reduceRes; 
}
console.log(returnStr([{char:"H",index:1}, {char:"i",index: 1}, {char:"!",index:2}]));
console.log(returnStr(infoStr));

//7
let arrHolder = [[14, 45], [1], ['a', 'c', 'd']];
arrHolder.sort(function(prev, next){
    return prev.length - next.length;
});
console.log(arrHolder);

//8
let pc = [{
    cpu: 'intel', 
    info: {
        cores:2, 
        сache: 3
    }
}, {
    cpu: 'intel', 
    info: {
        cores:4, 
        сache: 4
    }
}, {
    cpu: 'amd', 
    info: {
        cores:1, 
        сache: 1
    }
}, {
    cpu: 'intel', 
    info: {
        cores:3, 
        сache: 2
    }
}, {
    cpu: 'amd',
     info: {
         cores:4, 
         сache: 2
        }
    }];
function filterCore(arr){
    arr.sort(function(prev, next){      
        return prev.info.cores - next.info.cores
    });
    return arr;
}
console.log(filterCore(pc));

//9
let products = [{
    title: 'prod1', price: 5.2
}, {
    title: 'prod2', price: 0.18
}, {
    title: 'prod3', price: 15
}, {
    title: 'prod4', price: 25
}, {
    title: 'prod5', price: 18.9
}, {
    title: 'prod6', price: 8
}, {
    title: 'prod7', price: 19
}, {
    title: 'prod8', price: 63
}]

function filterCollection(arr, fromVal, toVal) {
    let newArr = arr.filter(function(number) {
        return number.price >= fromVal && number.price < toVal;
    });
    newArr.sort(function(prev, next){        
        return prev.price - next.price
    });
    return newArr;
};
console.log(filterCollection(products, 15, 30));
