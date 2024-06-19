// Accessing element with the help of class name

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor = "yellow"

// ------------------------------------------------

// Accessing element with the help of id
// document.getElementById("yellowbox").style.backgroundColor = "yellow"

// ------------------------------------------------

// Accessing element by using query selectors

// document.querySelector(".box").style.backgroundColor = "yellow"  // targets the first element with class name box

// console.log(document.querySelectorAll(".box")) // returns a node list containing all the elements with class name box
// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "yellow"
// })

// console.log(document.getElementsByTagName("div")) // returns an html collection containing all the divs in the html file

// ------------------------------------------------

// matches, closest and contains methods

let boxes = document.getElementsByClassName("box")
console.log(boxes[2].matches("#yellowbox")) // Checks if the element matches the given css selector

console.log(document.querySelector(".container").closest("body")) // Looks for the nearest ancestor that matches the given css selector. The element itself is also checked

console.log(document.querySelector(".container").contains(document.querySelector(".box"))) // Checkes if the an element is inside another element
