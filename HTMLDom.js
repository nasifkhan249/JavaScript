// const output=document.getElementById('output');
// console.log(output);

//The document.getElementsByTagName() method is used to select all elements in the document with a specified tag name. It returns a live HTMLCollection of elements.

//How it Works

// How it Works
// Returns a Collection: The method returns an HTMLCollection, which is an array-like object containing all the elements with the specified tag name.
// Live Collection: The HTMLCollection is live, meaning it automatically updates itself when the document changes. If you add or remove elements with the specified tag name, the collection will reflect those changes.
// Index-Based Access: You can access elements in the collection using their index, starting from 0.

//Case Sensitivity: When called on an HTML document, the method lower-cases its argument before proceeding. This is important to remember when working with SVG elements or other non-HTML elements.





// const outputs=document.getElementsByClassName('output');
// console.log(outputs);

// The document.getElementsByClassName() method is used to select all elements in the document with a specified class name. It returns a live HTMLCollection of elements.


// document.getElementsByClassName(className)
// className: This is a string representing the class name of the elements you want to select. You can also specify multiple class names separated by spaces.
// How it Works
// Returns a Collection: The method returns an HTMLCollection, which is an array-like object containing all the elements with the specified class name.
// Live Collection: The HTMLCollection is live, meaning it automatically updates itself when the document changes. If you add or remove elements with the specified class name, the collection will reflect those changes.
// Index-Based Access: You can access elements in the collection using their index, starting from 0.



// const out=document.querySelectorAll('#output');
// console.log(out);



// The document.querySelectorAll() method is used to select all elements in the document that match a specified CSS selector or group of selectors. It returns a static NodeList of elements.



// document.querySelectorAll(selectors)

// selectors: This is a string containing one or more CSS selectors separated by commas. These selectors determine which elements to select.
// How it Works
// Returns a Collection: The method returns a NodeList, which is an array-like object containing all the elements that match the specified selectors.
// Static Collection: Unlike getElementsByTagName or getElementsByClassName, the NodeList returned by querySelectorAll is static. This means it does not update automatically when the document changes.
// Index-Based Access: You can access elements in the NodeList using their index, starting from 0.