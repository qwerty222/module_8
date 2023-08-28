const users = [
    {
        name: "Vasya",
        age: 16
    },
    {
        name: "Petya",
        age: 18
    },
    {
        name: "Sasha",
        age: 20
    },
    {
        name: "Kolya",
        age: 22
    }
];

const filteredUsers = users.filter(user => user.age >= 18);

const newArray = filteredUsers.map(user => user.name);

console.log(newArray);