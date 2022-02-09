const numbers = [3,5,6,7,8,9];
// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element){
//     return element * element;
// }

// let square = element=> element * element;
//let square = x=> x * x;

// var numb = numbers.map(square);
// console.log(numb);

// var numb = numbers.map(function(element){
//     return element *element;
// })
// console.log(numb);

// numbers.map(function(element,index,array){
//     console.log(element,index,array);
// })

const result = numbers.map(x=>x*x); //using map
console.log(result);

const filterNumber = numbers.filter(x=> x>5); //using filter
console.log(filterNumber);

const findNumber = numbers.find(x=> x > 5); // using find
console.log(findNumber);
