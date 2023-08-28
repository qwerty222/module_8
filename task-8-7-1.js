const person = {
    Name: 'John',
    Age: '18'
}

const printInfo = function (name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printInfo.call(person, person.Name, person.Age);