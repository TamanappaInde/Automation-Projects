const users = [
    {username: "admin", role: "admin", active: true},
    {username: "tester", role: "tester", active: true},
    {username: "dev", role: "developer", active: false}
];

const activeUsers = users.filter(
    user => user.active && user.role === "tester"
);

console.log(activeUsers);

