// forEach --> loop
/* const users = ["Sagar", "Sanjay", "Mahesh", "Sudarshan"]
users.forEach(user=>console.log(user)); */

// Example 1 - List of browsers
/* const browsers = ["chrome","edge","safari"]
console.log(browsers[0])
console.log(browsers[1])
console.log(browsers[2]) */

// Example 2 - Loop through test data
/* let users2 = ["admin","manager","tester"]
for (let user of users2){
    console.log(user);
} */

// Object - store related information
// Object stores key value pairs
// Example 3
/* let user = {
    username: "admin",
    password: "admin123",
    role: "tester"
}
console.log(user.username);
console.log(user.password);
console.log(user.role); */



// Array Methods
// push- add item
/* let users = ["admin","manager","tester", "BA"]
users.push("Devloper")
console.log(users) */
// pop - remove last item
/* let users = ["admin","manager","tester", "BA"]
users.pop()
console.log(users) */
// includes -check value
let users = ["admin","manager","tester", "BA"]
console.log(users.includes("admin"));
console.log(users.includes("Devloper"));


// Object one more ex
let employee = {
    name: "Tamanappa",
    designation: "Senior SOftware Engineer",
    phone: 67567899,
    location: "Pune"
}
console.log(employee.name)
console.log(employee.phone)
