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
// var newdiv = document.createElement('div');
// // add class
// newdiv.className='hello';

// // add id
// newdiv.id = "hello1";

// // add attr
// newdiv.setAttribute('title','hello div');

// // add the content

// var newdivText = document.createTextNode('Hello World');

// // add text to div
// newdiv.appendChild(newdivText);

// // insert into the dom
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// newdiv.style.fontSize='80px';
// container.insertBefore(newdiv, h1);
// console.log(newdiv);


// Dom part 3

// var button = document.getElementById('button').addEventListener(
//     'click', function(){
//         console.log(123);
//     });
// var button = document.getElementById('button').addEventListener(
//     'click', buttonClick);

// var button = document.getElementById('button').addEventListener(
//     'click',(e)=>{
//         e.preventDefault();
//         console.log(e.target);
// });

// function buttonClick(e){
//     // console.log('Button clicked');
//     // document.getElementById('header-title').textContent='I love you';
//     // document.querySelector('#main').style.backgroundColor='yellow';

//     // console.log(e);
//     console.log(e.target);

// }

// const button = document.getElementById('button');
// button.addEventListener('click',(e)=>{
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
// })

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


// console.log("object");
// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');

// // form submit event
// form.addEventListener('submit', addItem);

// // Add item
// function addItem(e){
//     e.preventDefault();

//     // get input value
//     var newItem = document.getElementById('item');
//     // create new li
//     var newLi = document.createElement('li').value;
//     // add class
//     newLi.className = 'list-group-item';
//     // add text node with input value
//     newLi.appendChild(document.createTextNode(newItem));
//     itemList.appendChild(li);
// }