// Lexical Scope
// In JavaScript, lexical scope means that the scope of a variable is determined by its position in the source code. Inner functions can access variables from outer functions but not vice versa.

// Inner functions can access outer variables, but can not access variables from other inner functions
// Also outer functions can not access inner function variables


// function outerFunction() {
//     let outer = 'I am from outer function';

//     function innerFunction1() {
//         let inner1 = 'I am from inner function 1';
//         console.log(outer); // Accessing outer variable
//     }
//     function innerFunction2() {
//         let inner2 = 'I am from inner function';
//         // console.log(inner1); // This will cause an error because inner1 is not defined in this scope
//     }

//     innerFunction1();
//     innerFunction2();
// }
// outerFunction();



// Closure
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to "remember" the environment in which it was created, even after that environment has been executed.

// Example 1:
// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName; // This returns the lexical scope of the function 'displayName' i.e. the function itself and the variable 'name'
//     // When makeFunc is called, it returns displayName, which retains access to the variable 'name'
// }

// const myFunc = makeFunc(); // myFunc is now a closure that retains access to the variable 'name'.
// myFunc(); // It needs to be called seperately as it 'myFunc' is just a reference to the function displayName, not the function itself.


// Example 2:
// The task is to add a functionallity to change the background color of the page to the color displayed on the button assuming that there are multiple buttons with different colors.

// First Method: using event listeners for each button (Not recommended for large number of buttons)

// document.getElementById("orange").addEventListener("click", function() {
//     document.body.style.backgroundColor = "orange";
// });
// document.getElementById("green").addEventListener("click", function() {
//     document.body.style.backgroundColor = "green";
// });

// Second Method: using closure

// function clickHandler(color){
//     document.body.style.backgroundColor = `${color}`;
// }

// Does not work as expected with onclick handler because the function is called immediately instead of being assigned as a callback.
// document.getElementById("orange").onclick = clickHandler('orange')
// document.getElementById("green").onclick = clickHandler('green');

// Works properly as the function clickHandler is a closure that retains access to the variable 'color'.
// document.getElementById("orange").addEventListener("click", function() {
//     clickHandler('orange');
// });
// document.getElementById("green").addEventListener("click", function() {
//     clickHandler('green');
// });

// Another way to use closure
function clickHandler(color) {
    return function() {
        document.body.style.backgroundColor = `${color}`;
    }
}
// Now this will work as expected because the function returned by clickHandler retains access to the variable 'color'.
document.getElementById("orange").onclick = clickHandler('orange')
document.getElementById("green").onclick = clickHandler('green');