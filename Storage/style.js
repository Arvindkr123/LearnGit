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

    localStorage.setItem("userDeatils",JSON.stringify(myObj));
    console.log(localStorage);
    let myObj_deserialized = JSON.parse(localStorage.getItem("userDeatils"));
    console.log(myObj_deserialized);
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