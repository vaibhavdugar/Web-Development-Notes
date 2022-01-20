// Functions in JavaScript

// We use functions in javascript when we have to do something repeatedly. For ex-

// let name = "Vaibhav";
// let name1 = "Rahul";
// let name2 = "Rishabh";
// let name3 = "Arjun";

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");

// We have to write the same thing repeatedly, this is not feasible hence we use functions

function greet(name, greetText = "Greetings from JavaScript"){
    // The value of greetText above is the default value 

    // greet is the name of the function and there are parameters in the bracket
    let name1 = "This";  // The scope of this name1 is function scope means it is accessible inside this function only and different from the name1 outside this function
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}
// To print the text we have to call the function and it can be called any number of times.
let name = "Vaibhav";
let name1 = "Rahul";     // The scope of this name1 is global. It can be accessed from anywhere and is different from the name1 inside the function.
let name2 = "Rishabh";
let name3 = "Arjun";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);   // Here I didn't pass greetText="Good Morning", so the default value will be printed

let returnVal = greet(name, greetText);  
console.log(returnVal);      // This will be undefined because function greet is not returning anything, the output comes only when we are printing something in the function


// Function which return something
function sum(a,b,c){
    let d = a + b + c;
    return d;
    console.log("Function is returned");  // Anything written after function is returned, will not be executed.
}
let returnVal1 = sum(1,2,3);
console.log(returnVal1);




