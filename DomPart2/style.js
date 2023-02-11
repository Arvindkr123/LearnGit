// console.log("Hello World");
// Traversing Dom //
// const items = document.querySelector('#items');
// parentNode
// console.log(items.parentNode);
// items.parentNode.style.backgroundColor ='#f4f4f4';
// console.log(items.parentNode.parentNode.parentNode);

// parentElement
// console.log(items.parentElement);
// items.parentElement.style.backgroundColor='#f4f4f4';
// console.log(items.parentElement.parentElement.parentElement);

// child Node
// console.log(items.childNodes);
// console.log(items.children);
// console.log(items.children[0]);
// items.children[0].style.backgroundColor ='yellow';

// first child
// // console.log(items.firstChild);
// console.log(items.firstElementChild);
// items.firstElementChild.textContent ="Hello 1";

// last child
// console.log(items.lastElementChild);
// items.lastElementChild.textContent = "Hello 4";

// nextSibling
// console.log(items.nextSibling);

// nextElement sibling
// console.log(items.nextElementSibling);

// previous sibling
// console.log(items.previousSibling);

// previous element sibling
// console.log(items.previousElementSibling);
// items.previousElementSibling.style.color ='green';

// Create element

// create a div
var newdiv = document.createElement('div');
// add class
newdiv.className='hello';

// add id
newdiv.id = "hello1";

// add attr
newdiv.setAttribute('title','hello div');

// add the content

var newdivText = document.createTextNode('Hello World');

// add text to div
newdiv.appendChild(newdivText);

// insert into the dom
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newdiv.style.fontSize='80px';
container.insertBefore(newdiv, h1);
console.log(newdiv);
