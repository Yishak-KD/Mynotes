// Spread Operators in Modern JS
// 1 - To concatenate arrays

const arr0 = [1, 2, 3]
const arr1 = [4, 5, 6]
const arr2 = [...arr0, ...arr1]
console.log(arr2)

// To concatenate a new array with some additional items
const arr3 = [1, 2, 3]
const arr4 = [...arr1, 7, 8, 9]
console.log(arr4)

// To copy an array
const arr5 = [1, 2, 3]
const arr6 = [...arr1]
console.log(arr6)

// To pass an arguments to a function
function myFunction(x, y, z) {
    console.log(x + y + z)
}

const arr = [1, 2, 3]
myFunction(...arr);

// To create a new object by merging multiple objects
const obj1 = { name: 'john', age: 30 }
const obj2 = { city: 'john', country: 'USA' }
const obj3 = { ...obj1, ...obj2 }

console.log(obj3)

// In each of these examples, the spread operator is used to extract the individual values from the array or object and spread them out into a new array or object.

// The spread operator can be used with any iterable object, including arrays, strings, and sets. However, it cannot be used with objects that are not iterable.