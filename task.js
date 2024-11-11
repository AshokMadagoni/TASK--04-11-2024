console.log(Math.min(1,4,2,3,7,99,11,9,11,23))
console.log(Math.max(1,4,2,3,7,99,11,9,11,23))
let c=(1,2,3,4,455,9,0,1)
console.log(Math.min(c))
console.log( Math.floor(Math.random() * 5)+5);

console.log(Math.ceil(5.1));
console.log(Math.ceil(5.5));

console.log(Math.floor(5.9));
console.log(Math.floor(5.5));

console.log(Math.round(5.1));
console.log(Math.round(5.9));
console.log(Math.round(5.5));


const [a, b] = [10, 20, 30, 40];
console.log(a);
console.log(b);

const { name, age } = { name: "Alice", age: 25, city: "New York" };
console.log(name);
console.log(age);

const object={ name: "Alice", age: 25, city: "New York" }
const { name:x, age:y, city:z }=object
console.log(x);
console.log(y);


const ashok={ person: { name: "Eve", address: { city: "Paris" } } }
console.log(ashok.person.address.city);

let arr1=[1, 2, 3] 
let arr2= [...arr1,4, 5, 6]
console.log(arr2);

let arr3=[1, 2, 3]
let arr4=[4, 5, 6]
let finalarr=[...arr3,...arr4]
console.log(finalarr);

let object1={ name: "John", age: 30} 
let newobject={...object1,city:"nalgonda"}
console.log(newobject);














