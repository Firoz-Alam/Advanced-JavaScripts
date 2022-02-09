const students = [
    {id:10,name:"Razib"},
    {id:20,name:"Ratul"},
    {id:30,name:"Sazib"}
];

// const name = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     name.push(element);
// }

// console.log(name);

const names = students.map(s => s.name);
console.log("names",names);

const ids = students.map(s => s.id);
console.log("ids",ids);

const filterValue  = students.filter(s => s.id > 10);
console.log("Filter Value: ",filterValue);

const findValue = students.find(s => s.id > 10);
console.log("Find value: ",findValue);

