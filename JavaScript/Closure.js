// A function that remembers and can access variables from outer function even after the outer function has finished executing

function outer(){
    let count = 0;
    console.log(count);
    return function inner(){
        count++;
        console.log(count);
    }
}
const counter = outer();
counter()
counter()
counter()

// Login example
function createLogin(username){

    return function (){
        console.log(`Logging as a ${username}`);
    }
}
const adminLogin = createLogin("admin")
const testerLogin = createLogin("tester")
adminLogin()
testerLogin()

// Test data example
function testdata(username, password){

    return function(){
        return {
            username: username,
            password: password
        };
    };
}
const testuser = testdata("tester", "tester@123")
console.log(testuser())

// Closure with parameters
function multiplyBy(number){
    return function(value){
        return value * number;
    }
}
const multiplyBy2 = multiplyBy(2)
const multiplyBy5 = multiplyBy(5)

console.log(multiplyBy2(10))
console.log(multiplyBy5(10))

