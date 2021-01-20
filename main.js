// for (let i =0; i <= 15; i++) {
//   console.log(i);
// }

// // ******notice a for loop will run without calling it 
// // because JS reads from top to bottom
// // and also if we want it to run when we call it then it would have to be wrapped in a function

// const countFunction = () => {
//   for (let i =0; i <= 15; i++) {
//     console.log(i);
//   }
// }

// countFunction();


// ******Arrays With Loops
// const ec14Instructors =['Aja', 'Trinity', 'Dr. T', 'Discussion Tickets'];

// for (let i =0; i < ec14Instructors.length; i++) {
//   console.log(ec14Instructors[i]);
// }

// ****** Arrays, Loops, Functions 

const colors = ['red','orange','yellow','green','blue','indigo'];

const colorLoop = () => {
  let domString = '';

  for (let i =0; i < colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`
  }

  console.log(domString);
};

// colorLoop();


const instructors = [
  {first: 'Trinity', last: 'Christiana'},
  {first: 'Aja', last: 'Washington'},
  {first: 'Teresa', last: 'Vasquez'}
];

const nameLoop = () => {
  let domString = '';

  for (let i = 0; i < instructors.length; i++) {
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`
  }

  console.log(domString);

}

nameLoop();
