var width = 10.5;
var height = 20;
var area = width * height;
console.log("Di\u1EC7n t\u00EDch h\u00ECnh ch\u1EEF nh\u1EADt: " + area);
var x = 5;
console.log(x);
var array = [1, 3, 5, 7, "abc"];
//for-of
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) { //giong foreach ben java
    var element = array_1[_i];
    console.log(element);
}
//for-in in ra index của mảng
for (var index in array) {
    console.log(index);
}
//map - es6
array.map(function (element) { return console.log(element); });
//named function
function sum(a, b) {
    return a + b;
}
console.log('name function:' + sum(3, 4));
//arrow function
var sum1 = function (a, b, c) { return a + b + c + "a"; };
console.log('arrow function:' + sum1(3, 4, 5));
var numbers = [1, 2, 3, 4];
var newArrayi = numbers.map(function (item) { return item * 2; });
var newArray2 = numbers.filter(function (item) { return item * 2; });
var newArray3 = numbers.forEach(function (item) { return item * 2; });
console.log(newArrayi);
console.log(newArray2);
console.log(newArray3);

