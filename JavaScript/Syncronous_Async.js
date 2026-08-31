// Synchronous

console.log("Start");

function greet(){
    console.log("Hello")
}

greet();

console.log("End");

// Asynchronus
console.log("Start Async")

setTimeout(()=>{
    console.log("Hello after 2 seconds")
}, 2000);

console.log("End Asynch");