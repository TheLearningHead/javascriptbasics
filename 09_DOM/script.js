// About DOM, BOM and window object //

// window object represents the browser window and provides methods to control it. It is a global object
// console.log(window)

// DOM is Document Object Model. It represents the page contents as HTML or we can say that it displays the entire content of the page as a document tree.
// console.log(document.body) // displays the contents of the body of the page
// document.body.style.backgroundColor = "red" // adds an inline css to the body changing its background color to the color specified
// document.title = "Welcome to concepts of DOM!" // changes the title of the page

// BOM is Browser Object Model. It represents the additional objects provided by the host environment(browser) for working with everything except the document
// location.href = "https://www.google.com" // redirects the page to the specified url

// ---------------------------------------------------------------------------------------

// DOM - Children, Parent and Sibling //

// Following works for browsers only

// document.body.childNodes  // gives a list of all the children of body
// document.body.childNodes[3].childNodes  // gives all the children of the specified child of body
// document.body.firstElementChild.children  // gives all element children of first element child of body

// document.body.firstElementChild.children[3].previousElementSibling
// document.body.firstElementChild.children[1].nextElementSibling

// document.body.firstElementChild.children[1].parentNode  // it might return a text node, element node or a comment node
// document.body.firstElementChild.children[1].parentElement  // will always return an element node
