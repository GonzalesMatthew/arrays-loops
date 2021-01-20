const array1 = ['cow','dog','cat'];

// array.join() converts elements of array into a string, separated by what you define

const string1 = array1.join(', ');

console.log(string1);

// to turn a string back into an array you can use the method split()

const string1ToArray = string1.split(', ');

console.log(string1ToArray);

// push() & pop()
array1.pop();
console.log(array1);

array1.push('cat');
console.log(array1);

// notice with const, you can still update/change arrays and objects
// because they are mutable


// .unshift() & .shit()

array1.shift();
console.log(array1);

array1.unshift('cow');
console.log(array1);
