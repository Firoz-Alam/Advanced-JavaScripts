const numbers = [1,2,3,4,5,6,7,8,9];
//slice

const sliceCkake = numbers.slice(2,5); //output [3,4,5]
console.log(sliceCkake); // before start number gone and  end after number gone
console.log(numbers); // original array stay as same before

//splice

const removed = numbers.splice(2,3,10); //output = [3,4,5] also added numbers or value
console.log(removed);
console.log(numbers); //  original value also removed and after added 10, it will show [1,2,10,6,7,8,9]

//join

const joinValue = numbers.join("love  ");
console.log(joinValue);