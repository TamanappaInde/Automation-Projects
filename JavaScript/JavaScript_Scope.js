// Global Scope
/* let num = 10;
console.log(num);
function disp(){
    console.log(num);
    if (num){
        console.log(num)
    }
}
disp() */

// function scope
/* let num = 30;
function disp(){
    let num = 20;
    console.log(num);
    if (num){
        console.log(num)
    }
}
console.log(num)
disp(); */

// Block Scope
let num = 30
console.log(num)
function disp(){
    let num1 = 40;
    console.log(num1)
    if(num1){
        let num2 = 40;
        console.log(num2);
    }
    console.log(num2)
}
disp()
