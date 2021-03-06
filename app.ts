//getting it from index.html
const num1Ele = document.getElementById('n1') as HTMLInputElement;
const num2Ele = document.getElementById('n2') as HTMLInputElement;
const buttonEle = document.querySelector('button')!; // -> adding '!' bcoz of null type err in ts

//General Check
function add(n1: NumberOrString, n2: NumberOrString){         //-> '|' union
    if(typeof n1 === 'number' && typeof n2 === 'number')
        return n1+n2;
    else if(typeof  n1 === 'string' && typeof  n2 === 'string')
        return n1+ " " +n2;
    else
        return +n1 + +n2;
}

//Array
const numArr: Array<number> = [];
const textArr: Array<string> = [];

//Type alias
type NumberOrString = number | string;
type Result = {val:number; timestamp:Date};
interface  ResultObj {
    val: number;
    timestamp: Date;
}

//Obj
function PrintResult(resultObj: ResultObj)
{
    console.log(resultObj.val);
}

buttonEle.addEventListener('click',() => {
    const n1 = num1Ele.value;
    const n2 = num2Ele.value;
    const result = add(+n1, +n2);   //using + since .value is string we r forcing to accept number through '+' 
    const StringResult = add(n1, n2);
    // console.log(result);
    // console.log(StringResult);
    numArr.push(result as number);
    textArr.push(StringResult as string);
    PrintResult({val: result as number, timestamp: new Date()});
    console.log(numArr);
    console.log(textArr);
});
// console.log(add(1,5));
// console.log(add('1','5')); -> String

//promise
const myPromise = new Promise<string>((resolve, reject) => {  //Generic type can be used only in obj
    setTimeout(() => {
        resolve("All Good!!");
    }, 2000);
});

myPromise.then((result) =>{
    console.log(result.split("G"));
});



/*Core Data Types
number -> 1,5.3,-10
string -> 'Hi', "Hi", `Hi`
boolean -> true, false
object -> {age:30}
Array -> [1, 2, 3]
*/