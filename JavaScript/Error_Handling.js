
// Example 1 - try catch

try {
    let result = 10/0;
    console.log(result);
    throw new Error("Something went wrong")
} catch (error){
    console.log("Error:", error.message);
}

// Example 2 - Handling JSON parsing error
try {
    let data = JSON.parse(`{"name": "Tamanappa"}`);
    console.log(data.name);
} catch (error){
    console.log("Invalid JSON:", error.message)
}