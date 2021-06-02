function isPrime(number) {
    var isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else if (number > 2) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
var isPrimeArrow = function (number) {
    var isPrime1 = true;
    if (number < 2) {
        isPrime1 = false;
    }
    else if (number > 2) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime1 = false;
                break;
            }
        }
    }
    return isPrime1;
};
var array4 = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var sum3 = 0;
for (var _i = 0, array4_1 = array4; _i < array4_1.length; _i++) {
    var number = array4_1[_i];
    if (isPrime(number)) {
        sum3 += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum3);
