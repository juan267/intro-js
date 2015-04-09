// U3.W7: Eloquent JavaScript

// Run this file in your terminal using `node my_solution.js`. Make sure it works before moving on!

// Release 2: Program Structure (Ch. 2)
// Write your own variable and do something to it.

var name = "Juan"
var crazyName = name[0]+name[3]+name[2]+name[1]
console.log(crazyName)



// Complete one of the exercises: Looping a Triangle, FizzBuzz, or Chess Board

//Triangle

var triangle = function (size) {
  var display = []
  for (var i = 1 ; i < size+1; i += 1) {
      display += "#";
      console.log(display);
  }
};

triangle(10)

// FizzBuzz

for (var i = 1 ; i< 101; i++) {
  if ( (i % 5===0) && (i%3 === 0 ) ) {
    console.log("FizzBuzz");
  }
  else if ( (i % 5===0) && (i%3 !== 0 ) ) {
    console.log("Buzz");
  }
  else if ( i % 3 === 0)  {
    console.log("Fizz");
  }
  else  {
    console.log(i);
  }
};

// Chess Board

var board = ""

var fillBoard = function(size) {
  for (var i = 1; i<size+1; i++) {
    if (i%2 === 0) {
      board += (" # # # #\n");
    }
    else
      board += ("# # # #\n");
  }
};

fillBoard(8)
console.log(board)



// Release 3: Functions

// Complete the `minimum` exercise.

var min = function (n1, n2) {
  if (n1 < n2) {
    return n1;
  }
  else {
    return n2;
  }
};

console.log(min(4,2))



// Release 4: Data Structures: Objects and Arrays
// Create an object called "me" that stores your name, age, 3 favorite foods, and a quirk below.

var me = {
  name: "Juan Gomez",
  age: 24,
  favoriteFood: ["meat","sushi","potatos"],
  quirk: "hypocondriac"
};

console.log(me.name)
console.log(me.age)
console.log(me.favoriteFood)
console.log(me.quirk)