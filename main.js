// console.log("CONNECTED");

const students = ['Katy','Jackie','Sean','Nathan'];
// console.log(students.length);

//******** Accessing Items in Array

// second student 
console.log(students[1]);
// last student 
// beauty of this method is not having to know the length of the array
console.log(students[students.length - 1]);

// this wouldn't work because -1 is not an array index
// console.log(students[-1]);

// to reassign index, just call index and set equal to a new value
students[0] ='Matthew';
console.log(students);


// arrays with functions 
const valuePrinter = (array,index) => {
  return array[index];
}

console.log(valuePrinter([1,2,3,4,5,6], 4));

console.log(valuePrinter(students, 2));

// build function to find if 'Greg' is in the array 
const listOfNames =['Stacy','Adams','Felicia','Greg','Abrams'];

const findGreg = (array) => {
  return array.includes('Greg');
}

console.log(findGreg(listOfNames));
