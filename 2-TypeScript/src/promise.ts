
//hàm constructor Promise nhận vào 2 tham số là
// hàm resolve,hàm reject
// nếu hàm resolve được gọi thì status của promise là thành công và hàm .then() sẽ được gọi và ngược lại
// hàm resolve ,reject chỉ cho phép chuyền đúng 1 param
let money = 10000;
const buyACar = (car: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            } else {
                reject("Do not enough money");
            }
        }, 100);
    })
}

// then được sử dụng để lấy giá trị trả về của trạng thái fullFilled
//
// Tham số bạn truyền vào hàm resolve sẽ được chuyển đến then:
//
// .then và .catch đây là 2 method của Promise.prototype, chỉ gọi dc khi new Promise lên.
// then được gọi khi resolve được gọi
// then nhận vào 1 function
// then có hai calback function
// promise.then(
//     function(success){
//         // Success
//     },
//     function(error){
//         // Error
//     }
// );

money = 1000001;

const promise = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
}).catch(value => console.log(value));
