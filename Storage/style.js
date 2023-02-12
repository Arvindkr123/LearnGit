function saveToLocalStorage(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.tel.value;

    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
    // localStorage.setItem('phone',phone);

    const myObj = {
        name,
        email,
        phone
    }

    localStorage.setItem(myObj.email, JSON.stringify(myObj));
    showUserOnScreen(myObj);
}

function showUserOnScreen(obj){
    const parentElem = document.getElementById('items');
    // const li = document.createElement('li');
    // li.textContent= obj.name+"-"+obj.email+"-"+obj.phone;
    // parentElem.appendChild(li);

    parentElem.innerHTML = `<li>${obj.email}--${obj.name}--${obj.phone}</li>`;
}




// let myObj = {
//     name:'Arvind',
//     age:22,
// };

// let myobj_serialized = JSON.stringify(myObj);
// localStorage.setItem("Myobj",myobj_serialized);
// // console.log(localStorage);

// let myObj_deserialized = JSON.parse(localStorage.getItem(myObj));
// console.log(myObj_deserialized);