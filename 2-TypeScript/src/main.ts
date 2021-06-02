import {Rectangle} from "./rectangle";

let width  : number = 10.5;
let height: number =20;
let area: number = width*height;
console.log(`Diện tích hình chữ nhật: ${area}`);

let x: number = 5;
console.log(x);
let array = [1, 3, 5, 7, "abc"];
//for-of
for (let element of array) { //giong foreach ben java
    console.log(element);
}

//for-in in ra index của mảng
for (let index in array) {
    console.log(index);
}

//map - es6
array.map(element => console.log(element));

//named function
function sum(a: number, b: number): number {
    return a + b;
}

console.log('name function:' + sum(3, 4))
//arrow function
let sum1 = (a: number, b: number,c:number) => a + b +c +"a";
console.log('arrow function:' + sum1(3, 4,5));

const numbers = [1,2,3,4]
const newArray = numbers.map(item => item * 2 );
const newArray2 = numbers.filter(item => item * 2 );
const newArray3 = numbers.forEach(item => item * 2 );
console.log(newArray);
console.log(newArray2);
console.log(newArray3);

const rectangle = new Rectangle(5, 5, 10, 20);
console.log(rectangle.toString());
console.log(rectangle.area());



