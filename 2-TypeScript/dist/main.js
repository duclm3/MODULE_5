"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rectangle_1 = require("./rectangle");
let width = 10.5;
let height = 20;
let area = width * height;
console.log(`Diện tích hình chữ nhật: ${area}`);
let x = 5;
console.log(x);
let array = [1, 3, 5, 7, "abc"];
for (let element of array) {
    console.log(element);
}
for (let index in array) {
    console.log(index);
}
array.map(element => console.log(element));
function sum(a, b) {
    return a + b;
}
console.log('name function:' + sum(3, 4));
let sum1 = (a, b, c) => a + b + c + "a";
console.log('arrow function:' + sum1(3, 4, 5));
const numbers = [1, 2, 3, 4];
const newArray = numbers.map(item => item * 2);
const newArray2 = numbers.filter(item => item * 2);
const newArray3 = numbers.forEach(item => item * 2);
console.log(newArray);
console.log(newArray2);
console.log(newArray3);
const rectangle = new rectangle_1.Rectangle(5, 5, 10, 20);
console.log(rectangle.toString());
console.log(rectangle.area());
//# sourceMappingURL=main.js.map