//getting it from index.html
const num1Ele = document.getElementById('n1') as HTMLInputElement;
const num2Ele = document.getElementById('n2') as HTMLInputElement;
const buttonEle = document.querySelector('button')!; // -> adding '!' bcoz of null type err in ts

// General Check
function add(n1: number | string, n2: number | string){
    if(typeof n1 === 'number' && typeof n2 === 'number')
        return n1+n2;
    else if(typeof  n1 === 'string' && typeof  n2 === 'string')
        return n1+ " " +n2;
    else
        return +n1 + +n2;
}

buttonEle.addEventListener('click',() => {
    const n1 = num1Ele.value;
    const n2 = num2Ele.value;
    const result = add(+n1, +n2);   //using + since .value is string we r forcing to accept number through '+' 
    const StringResult = add(n1, n2);
    console.log(result);
    console.log(StringResult);
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