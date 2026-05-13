// OLD ES5 STYLE

// var
var name = "John";

// normal function
function greet(user) {
  return "Hello " + user;
}

console.log(greet(name));


// ============================
// NEW ES6 STYLE
// ============================

// const
const userName = "John";

// arrow function + template literal
const sayHello = (user) => {
  return `Hello ${user}`;
};

console.log(sayHello(userName));


// spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);


// object destructuring
const student = {
  firstName: "John",
  lastName: "Doe"
};

const { firstName, lastName } = student;

console.log(firstName);
console.log(lastName);


// default parameter
const multiply = (a, b = 2) => {
  return a * b;
};

console.log(multiply(5));