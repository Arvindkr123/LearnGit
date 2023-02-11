// Examine the document object//

// console.log("hello World");
// const headerTitle = document.getElementById("header-title");
// console.log(typeof headerTitle);
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent= "hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// get element by Id
// console.log(document.getElementById("header-title"));
// const headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "HELLO";
// headerTitle.innerText = "Good Bye";
// headerTitle.innerHTML='<h1>Hello</h1>';
// headerTitle.style.color = "red";
// const mainHeader = document.getElementById('main-header');
// mainHeader.style.borderBottom="5px solid #000";

// get element by class Name
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent= "Hello 2";
// items[1].style.fontWeight = "bold";+
// items[1].style.backgroundColor = "yellow";

// // items.style.backgroundColor = "#f4f4f4";
// for(let i=0; i<items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4";
// }


const li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent= "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";

// items.style.backgroundColor = "#f4f4f4";
for(let i=0; i<li.length; i++){
    li[i].style.backgroundColor = "#f4f4f4";
}

// query selector
// var header = document.querySelector('#main-header');
// header.getElementsByClassName.borderBottom = "4px solid #ccc";

// var input = document.querySelector('input');
// input.value = "hello World";

// var submit = document.querySelector("input[type='submit']");
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color ='red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var lastItem = document.querySelector('.list-group-item:nth-child(2)');
// lastItem.style.color = 'coral';

// // Query selector //
// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "hello";
// // titles[0].style.backgroundColor = 'red';
// // titles[0].style.fontWeight = "bold";

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// for(let i=0; i<odd.length; i++){
//     even[i].style.backgroundColor = 'green';
//     even[i].style.fontWeight = 'bold';
//     // even[i].style.color = 'green';
//     // even[i].style.fontWeight = 'bold';
// }



 







