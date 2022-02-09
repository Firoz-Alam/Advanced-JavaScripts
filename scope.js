const num3 = 20;

function add(num1,num2){
    let result = num1 + num2 + num3;
    console.log(num3); // global scope variable
    console.log(result); //result block scope variable declare

    if(result > 20){
        var name = 'firoz'; //var hoisting it
        name = 'Rose';

    }
    console.log(name);
    return result;
}
console.log(num3); //access here and every where of function
console.log(result); // cant access here out of scope
var r = add(23,12);
console.log(r);