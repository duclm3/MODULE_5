function isPrime(number) {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
let isPrimeArrow = (number) => {
    let isPrime1 = true;
    if (number < 2) {
        isPrime1 = false;
    }
    else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime1 = false;
                break;
            }
        }
    }
    return isPrime1;
};
let array4 = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum3 = 0;
for (let number of array4) {
    if (isPrime(number)) {
        sum3 += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum3);
//# sourceMappingURL=ktSNT.js.map