U3.W7: Eloquent JavaScript

I worked on this challenge [by myself, with:]

You should complete any coding sections in the [my_solution.js](my_solution.js) file unless prompted to do so here. You can run the file using node. Similar to Ruby simply go to your terminal and type `node file_name.js`.

## Release 0: Introduction

- Did you learn anything new about JavaScript or programming in general?
  -


- What do you still feel uncomfortable with?


## Release 1: Chapter 1: Values, Types, and Operators

- Identify 2 similarities and 2 differences between JavaScript and Ruby syntax with regard to numbers, arithmetic, strings, booleans, and various operators you noticed.
  - JS does atomatic converion between types
  - JS have the NaN value that appers when an operation is nonsensical
  - As in Ruby operators have the same kind of precedence
  - - For now every type and value in Javascript seems to be almost the same as in Ruby, what i did learn that is not the same in ruby is that JS does automatic conversion of the type when it needs to perform some kind of calculation , this idiferent from what ruby does , and so new to me.
## Release 2: Chapter 2: Program Structure

- What is an expression?
  - An expresion can be anything , a string a number a boolean any kind of flow control, all programing lenguaes rely on expression to evaulate to something.

- What is the purpose of semicolons in JavaScript? Are they always required?
  - The semicolons indicates and expression or a line of code has beeen finished and the console can tinue to another expresion. They are not always necessary but its best to always use them as not having them can cause weird behaviors

- What is the cause of a variable returning "undefined?"
  "undefined" is e same as null or nil in ruby, it means that a variables exist but ist empty its void it dosent have any content .

- Write your own variable and do something to it in the [my_solution.js](my_solution.js) file.

- What does console.log do and when would you use it? What Ruby method is this similar to?
  - console.log is similar to what in ruby its Print. It displays calculations on the console.

- Write a program that asks for a user to input their favorite food. After they hit return have the program say: "Hey! That's my favorite too!"

Use the browser console to do this one. Node does not support the `prompt` function. Paste your solution in the box below.

```javascript

// Your program here

var userInput = prompt("Whats your favorite food")
if (isNaN(Number(userInput))) {
  console.log("Hey! That's my favorite too!");
}
else {
  console.log("I wouldn't eat that.");
};
```

- Describe `while` and `for` loops
  - While Loops: They iterate over a code block while the condition set remains as true or there is a break inside the block. Normally something inside the code block will change the caondition to be false and the while loop will end.
  - For loops: They iterate the number of times that we specify, or iterate over the number of elements that exits inside a data structure. we used a variable to speccify this number of times.

- Did you notice any other similarities or differences between Ruby and JavaScript in this section?
  - The syntax to write loops is very diferent in ruby an JS; especially for loops that in ruby are ussually handle by methods like each or map, in JS this operations are a lot more commplicated and requiere more logic from the programer.

- Complete at least one of the exercises (Looping a Triangle, FizzBuzz, or Chess Board) in the [my_solution.js](my_solution.js) file.


## Release 3: Functions

- Compare local and global variables
  -Local variables: Are all the variables that are defined inside a function using the keyword var, they live only inside the function and nowhere else
  -Global Variables: Are the ones that are defined outside functions thay can be used in any part of the program

- When should you use functions?
  - Function are the same as methods you should use them , whren you wnat to encapsulate a repetitive block of code that you use several times.

- What is a function declaration?
  - var name = function {

  }
  or
  function name {

  }

- Complete the `minimum` exercise in the [my_solution.js](my_solution.js) file.

## Release 4: Data Structures: Objects and Arrays

- What is the difference between using a dot and bracket to look up a property? Ex. array.max vs. array[max]
  - When you use the dot notation we have to use an exact valid variable name , when we use brackets we can create any expresion to get evaluated and that returns the value of the property. W

- Create an object called "me" that stores your name, age, 3 favorite foods, and a quirk in your [my_solution.js](my_solution.js) file.


- What object in Ruby is a JavaScript object with a name and value property similar to?

```

## Release 6: Reflection
Ok , so learning a new lenguage its always a difficult task. But since i have learn so much about ruby in the last days , i felt that learning JS this time wasent as difficult as i expected, it was all about learning the sintax and some of the key diferences that exist betwwen the teo lenguages. I still feel that JS sintax is a lot more complicated and that doing some simple opration can be a lot more complicated that what it is on ruby. I also disliked the fact that node.js dosent run all the functions that JS have and i didnt like running programs on the browser.