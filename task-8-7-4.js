const setFullName = function (obj, name) {
    obj.fullName = name;
}

const person = {
    Name: "Vasya",
    Age: 18
};

const setPersonFullName = setFullName.bind(person);

setPersonFullName(person, "John Smith");

console.log(person);