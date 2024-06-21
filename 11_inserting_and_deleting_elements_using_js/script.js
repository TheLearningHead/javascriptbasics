// console.log(document.querySelector(".box"))

// Following works in browser console

// using innerHTML returns the HTML written inside the targeted element
// document.querySelector(".container").innerHTML
// document.querySelector(".box").innerHTML

// using innerText returns the text written inside the targeted element
// document.querySelector(".box").innerText
// document.querySelector(".container").innerText

// using outerHTML returns the targeted element and the HTML written inside it
// document.querySelector(".container").outerHTML

// tagName returns the name of the element. It works only for element nodes
// document.querySelector(".container").tagName

// nodeName returns the name of the element. It works for all types of nodes
// document.querySelector(".container").nodeName

// textContent returns the text content inside the targeted element
// document.querySelector(".container").textContent

// document.querySelector(".container").hidden  // returns a boolean value

// we can make a element hidden by javascript
// document.querySelector(".container").hidden = true

// we can change the innerHTML 
// document.querySelector(".box").innerHTML = "This was a box"

// Attribute Methods
// document.querySelector(".box").hasAttribute("style") 
// document.querySelector(".box").getAttribute("style")
// document.querySelector(".box").setAttribute("style", "display: inline")
// document.querySelector(".box").attributes
// document.querySelector(".box").removeAttribute("style")

// document.querySelector(".box").dataset  // returns the info written using data attribute

// ---------------------------------------------------

// Insertion Methods
// These methods are used to update data to the DOM without reloading the page

// let div = document.createElement("div") // created an element 
// div.innerHTML = "I am <b>newly inserted</b> div element" // added content to the created element
// div.setAttribute("class", "created") // added attribute to the newly created element
// document.querySelector(".container").append(div) // adds the newly created element at the last of the targeted element
// document.querySelector(".container").prepend(div) // adds the newly created element at the beginning of the targeted element
// document.querySelector(".container").after(div) // adds the newly created element after the targeted element
// document.querySelector(".container").before(div) // adds the newly created element before the targeted element
// document.querySelector(".box").replaceWith(div) // replaces the targeted element with the newly created element

// ----------------------------------

// insertAdjacent HTML/Element/Text methods

// let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("beforebegin", "<b>adjacent HTML beforebegin</b>")
// cont.insertAdjacentHTML("afterbegin", "<b>adjacent HTML afterbegin</b>")
// cont.insertAdjacentHTML("beforeend", "<b>adjacent HTML beforeend</b>")
// cont.insertAdjacentHTML("afterend", "<b>adjacent HTML afterend</b>")

// cont.insertAdjacentElement("beforebegin", div)

// cont.insertAdjacentText("beforebegin", "I am adjacent text")

// ----------------------------

// Node Removal
// document.querySelector(".box").remove()  // removes the targeted element

// ----------------------------

// className and classList

// let cont  = document.querySelector(".container")
// cont.className // returns a string containing all the classes of the targeted element
// cont.className = "container" // replaces the string of classes of the targeted element with the string provided

// cont.classList // returns a list containing all the classes of the targeted element
// cont.classList.add("bgpic") // adds the provided class to the targeted element
// cont.classList.remove("bgpic") // removes the provided class from the targeted element
// cont.classList.toggle("bg-yellow") // adds the provided class if it doesnot exist for the targeted element, otherwise removes the provided class
// cont.classList.contains("container") // returns a boolean value
