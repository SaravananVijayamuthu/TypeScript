"use strict";
//getting it from index.html
var num1Ele = document.getElementById('n1');
var num2Ele = document.getElementById('n2');
var buttonEle = document.querySelector('button'); // -> adding '!' bcoz of null type err in ts
//General Check
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number')
        return n1 + n2;
    else if (typeof n1 === 'string' && typeof n2 === 'string')
        return n1 + " " + n2;
    else
        return +n1 + +n2;
}
//Array
var numArr = [];
var textArr = [];
//Obj
function PrintResult(resultObj) {
    console.log(resultObj.val);
}
buttonEle.addEventListener('click', function () {
    var n1 = num1Ele.value;
    var n2 = num2Ele.value;
    var result = add(+n1, +n2); //using + since .value is string we r forcing to accept number through '+' 
    var StringResult = add(n1, n2);
    // console.log(result);
    // console.log(StringResult);
    numArr.push(result);
    textArr.push(StringResult);
    PrintResult({ val: result, timestamp: new Date() });
    console.log(numArr);
    console.log(textArr);
});
// console.log(add(1,5));
// console.log(add('1','5')); -> String
/*Core Data Types
number -> 1,5.3,-10
string -> 'Hi', "Hi", `Hi`
boolean -> true, false
object -> {age:30}
Array -> [1, 2, 3]
*/ 
