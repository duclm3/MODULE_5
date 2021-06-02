
let Fibonaci = (n:number):number =>{
    if(n<2){
        return 1;
    }
    return Fibonaci(n -1 ) + Fibonaci(n -2 );
}
console.log(Fibonaci(5));
function a(): void {}
void function a() {}
