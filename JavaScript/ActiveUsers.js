const users = [
    {name: "John", active: true},
    {name: "David", active: false},
    {name: "Hendry", active: true},
    {name: "Samantha", active: true}
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);
