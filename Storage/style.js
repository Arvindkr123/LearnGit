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
    const li = document.createElement('li');
    li.textContent= obj.name+"-"+obj.email+"-"+obj.phone;

    // parentElem.innerHTML = `<li>${obj.email}--${obj.name}--${obj.phone}</li>`;

    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'delete';
    deleteButton.onclick=()=>{
        localStorage.removeItem(obj.email);
        parentElem.removeChild(li);
    }
    li.appendChild(deleteButton);
    parentElem.appendChild(li);

    // first add the edit button
    const editButton = document.createElement('input');
    editButton.type='button';
    editButton.value = 'Edit';
    editButton.onclick=()=>{
        localStorage.removeItem(obj.email);
        parentElem.removeChild(li);
        document.getElementById('name').value = obj.name;
        document.getElementById('email').value = obj.email;
        document.getElementById('tel').value = obj.phone;
    }
    li.appendChild(editButton);
    parentElem.appendChild(li);
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