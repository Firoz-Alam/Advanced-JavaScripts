let name;
console.log(name); // undefined

function add(num1,num2){
    console.log(num1+num2);
    return
}
const result = add(12,12);
console.log(result); // undefined

function add2(num1,num2){
    console.log(num1 + num2); // NaN
}

const result2 = add2(12);
console.log(result2); //undefined

const object = {name:"Firoz", phone:56656};
console.log(object.address); // undefined

let ages = [12,54,78];
console.log(ages[22]); //undefined

let variable = undefined;
console.log('variable', variable); // undefined


// null means not exist