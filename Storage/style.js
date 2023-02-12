function saveToLocalStorage(e){
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.tel.value;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phone',phone);
}