// Default Function
/* function fun(){
    console.log("Default Function");
}
fun(); */

// Parametrize Function
/* function fun(name){
    return "Hello " + name
}

const user = fun("Tamanappa")
console.log(user) */

// Arrow Function
/* const result = (name) => "Hello " + name
console.log(result("Tamanappa")) */

// Arrow function with parametes
/* const greetUse = (name) => {
    console.log("Hello " + name)

}
greetUse("Tamanappa") */

// Arrow function with multiple parameters
/* const add = (a,b) => {
    return a+b;
}
const addition = add(10,20);
console.log(addition) */

// Anonymous Function
/* const result2 = function(name){
    return "Hello " + name
}
console.log(result2("Tamanappa")) */

// Callback function
/* function user(name, Callback){
    console.log(name)
    Callback()
}
user("Tamanappa", ()=>console.log("Done!!!")) */

// Example 1 - Login validation
/* function validateLogin(userName, password){
    if (userName !== "" && password !== ""){
        return "Login was Successfull"
    } else{
        return "Login was failed"
    }
}
const result = validateLogin("", "1234")
console.log(result) */

// Example 2- Calculate Test Pass percentage
/* function calTestPassPercentage(totalTests, passedTests){
    let percentage = passedTests/totalTests * 100
    return percentage
}
const result = calTestPassPercentage(90, 67);
console.log(result) */

// Example 3 - Check Browser Support
function isBrowserSupported(browser){
    if (browser === "chrome"){
        return "Chrome browser is supported"
    } else if (browser === "edge"){
        return "Edge browser is supported"
    } else {
        return "Browser is not supported"
    }
}
const result = isBrowserSupported("chrome")
console.log(result)

// Example 4 - Test Case Status
function getTestCaseStatus(Status){

    switch(Status){
        case "Pass":
            return "Test Case Pass"
        case "Fail":
            return "Test Case Failed"
        case "Skipeed":
            return "Test Case Skipped"
        default:
            return "Invalid Status"
    }
}
console.log(getTestCaseStatus("Skipeed"))