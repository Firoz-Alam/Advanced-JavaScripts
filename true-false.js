// falsy

// 0
// ""
//null
//undefined
//NaN

//Truthy

// "0", " ",[],{}

const number = 0;
if(number || number == 0){
    console.log("Condition is true");
}else{
    console.log("Condition is false");
}