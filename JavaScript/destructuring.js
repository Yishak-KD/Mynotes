// Destructuring in JavaSript
// Array destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(b)
console.log(a)
console.log(c)

// In this example, the array numbers is destructured into individual variables a, b, and c.

// Object destructuring
const person = { name: 'john', age: 30 }
const { name, age } = person

console.log(name)
console.log(age)

// In this example, the object person is destructured into individual variables name and age.

// Renaming variables
const person1 = { name1: 'Alex', age1: 40 }
const { name1: FullName, age1: years } = person1

console.log(FullName)
console.log(years)

// In this example, the object person is destructured into variables fullName and years, which are renamed from the original name and age keys.

// Default values
const person3 = { name2: 'Abby' };
const { name2, age2 = 25 } = person3;

console.log(name2)
console.log(age2)

// In this example, the object person is destructured into variables name and age, with a default value of 30 for age in case it is not defined in the original object.

// Nested destructuring
const person5 = { name5: 'John', age5: 30, address5: { city5: 'New York', country5: 'USA' } };
const { name5, age5, address5: { city5, country5 } } = person5

console.log(city5)
console.log(age5)

// In this example, the object person is destructured, and the nested object address is also destructured into variables city and country.

// Destructuring is a powerful feature in JavaScript that can simplify code and make it easier to read and understand. It can be used in various contexts, such as function parameters, return values, and assignments, and can greatly improve the readability and maintainability of your code.