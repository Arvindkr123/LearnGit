// print the any pattern using trick
// for(let i=0; i<5; i++){
//     var str ="";
//     for(let j=0; j<=i; j++){
//         str+="* ";
//     }
//     console.log(str);
// }

// for(let i=4; i<9; i++){
//     var str ="";
//     for(let j=10; j<=6+i; j++){
//         str+="* ";
//     }
//     console.log(str);
// }

// for(let i=6; i<=10; i++){
//     var str ="";
//     for(let j=15; j<=25-i; j++){
//         str = str+" *";
//     }
//     console.log(str);
// }

// for(let i=1; i<=3; i++){
//     let str ="";
//     for(let j=10; j<=(-3*i+19); j++){
//         str+="* ";
//     }
//     console.log(str);
// }

// for(let i=1; i<=5; i++){
//     let str =" ";
//     for(let j=10;j<=(-1*i+15); j++){
//         str+=" ";
//     }
//     for(let j=10; j<=2*i+7; j++){
//         str+="1 ";
//     }
//     for(let j=10;j<=(-1*i+15); j++){
//         str+=" ";
//     }
//     console.log(str);
// }

// for(let i=1; i<=10; i++){
//     var str=""
//     if(i%2!=0){
//         for(let j=1; 2*j<=(-1*i+11); j++){
//             str+="* ";
//         }
//     }else{
//         for(let j=1; 2*j<=i; j++){
//             str+="* ";
//         }
//     }
//     console.log(str);
// }

// for(let i=1; i<=5; i++){
//     let str =" ";
//     for(let j=10; j<=-1*i+14; j++){
//         str+=" ";
//     }
//     for(let j=1; j<i; j++){
//         str+="*"
//     }
//     for(let j=1; j<=i; j++){
//         str+="*"
//     }
//     for(let j=10; j<=-1*i+14; j++){
//         str+=" ";
//     }
//     console.log(str);
// }

// for(let i=1; i<=10; i++){
//     var str ="";
//     for(let j=10; j<=-1*i+15; j++){
//         str+="*";
//     }
//     console.log(str);
// }

// for(let i=1; i<=5; i++){
//     var str="";
//     for(let j=1; j<=-1*i+6; j++){
//         str+="*";
//     }
//     console.log(str);
// }
// for(let i=1; i<=5; i++){
//     var str="";
//     for(let j=10; j<=1*i+9; j++){
//         str+="*";
//     }
//     console.log(str);
// }

// for(let i=1; i<=5; i++){
//     var str="";
//     for(let j=10; j<=1*i+9; j++){
//         str+="*";
//     }
//     for(let j=10; j<=-1*i+14; j++){
//         str+=" "
//     }
//     for(let j=10; j<=1*i+9; j++){
//         str+="*";
//     }
//     console.log(str);
// }

// check the number is prime or not
// let n = 9;
// let flag = true;
// for(let i=2; i<n; i++){
//     if(n%i==0){
//         console.log("This is not prime number");
//         flag= false;
//         break;
//     }
// }

// if(flag==true){
//     console.log("this is the prime number",n);
// }

// let arr =new Array([]);
// let n=2;
// let count = 0;
// let flag = true;
// while(count<20){
//     for(let i=2; i<n; i++){
//         if(n%i==0){
//             flag=false;
//             break;
//         }
//     }

//     if(flag==true){
//         arr[count] = n;
//         count+=1;
//     }
//     n+=1;
// } 

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// getName();
// console.log(x);
// console.log(getName);
// var x = 7;
// function getName(){
//     console.log("Hello there");
// }

// var a = 3;
// function printName(name){
// console.log(name)

// }
// printName("YAVTECH");
// console.log(a)

// printName("YAVTECH");
// console.log(a);
// var a = 3;
// function printName(name) {
//     console.log(name)
// }

// console.log(printName());
// console.log(a);
// var a = 3;
// var printName = (name) => {
//     console.log(name)
// }

// console.log(printName);
// console.log(a);
// var a = 3;
// var printName = function (name) {
//     console.log(name)
// }

// a =10;
// function hello(){
//     console.log("HWllo there");
// }

// function abc() {
//     console.log(a);
// }    
// var a = 7;
// abc();

// var a = 2;
// var c = 2;
// function b(){
//     var x = 2;
//     var c = 4
//     console.log(c)
// } 
// console.log(a);  // 2

// console.log(this.a); // 2

// console.log(this.c) // 2

// console.log(this.x) // undefined

// console.log(window.a) // 2

// console.log(window.x) // undefied
// console.log(b());

// lexical scope = local scope and its parent lexical scope
// function a(){
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }

// a();
// console.log(b);

// function abc() {
//     console.log(a);
// }
// abc();
// var a = 7;

// function outerfunction() {
//     console.log(a);
//     var c = 10;
//     innerfunction();
//         function innerfunction() {
//         console.log(b);
//         console.log(c);
//         }
// }
// var a = 7;
// var b =3
// outerfunction();

// function outerfunction() {
//     console.log(a);
//     var a = 10;
//     innerfunction();
//     function innerfunction() {
//         console.log(a);
//         console.log(window.a);
//         console.log(this.a)
//     }
// }
// var a = 7;
// var b =3
// outerfunction();

// console.log(a)
// console.log(b);
// let a =5;
// var b =6;
// console.log(b);

// console.log(a);
// let a =10;

// let a = 10;
// console.log(a);
// let a = 20;
// console.log(a);

// const a;
// a = 100;
// console.log(a);

// const a =100;
// a = 1000;

// console.log(a);
// var a = 5;
// console.log(b);

// let a = 5;
// var b = 6;
// console.log(this.b);
// console.log(window.b)
// console.log(window.a)
// console.log(this.a);

// let a =5;
// let a = 6;
// let a =6;
// const b
// b=100;

// console.log('a');
// console.log('b');
// setTimeout(()=> console.log('c'), 1000);
// console.log('d');

// console.log('a');
// console.log('b');
// setTimeout(()=> console.log('c'), 1000);
// setTimeout(()=> console.log('d'), 0);
// console.log('e');

// var arr = [1, 2,3,5]
// var newArr = arr.forEach((item, i ) => {
//     console.log(item + 'index' + i)
//     return item + i
// })
// console.log(newArr)



// 4b)
// var arr = [1, 2,3,5]
// var newArr = arr.map((item, i ) => {
//     console.log(item + 'index' + i)
//     return item + i
// })
// console.log(newArr)

// difference b/w foreach and map
// names =["chintu","pintu", "Ghanta"];
// const mrNames = [];
// for(let i=0; i<names.length; i++){
//     // console.log(`${names[i]}`);
//     mrNames.push("Mr "+names[i]);
// }

// names.forEach((name, i)=>{
//     mrNames.push("Mr "+name)
// });

// names.map((name)=>{
//     mrNames.push("Mr "+name);
// })

// const MrNames = names.forEach((n)=>{
//     return "Mr"+n;
// })
// console.log(MrNames);
// const MrNames = names.map((n)=>{
//     return "Mr"+n;
// })
// console.log(MrNames);

// let arr = [1, 2, 3, 4, 5];
// const sqs = arr.map(n=> n*n);
// console.log(sqs);

// var a = 50;
// {
//     var a =30;
//     let b = 20;
//     let c = 30;
// }
// console.log(a)

// const a = 50;
// {
//     var a =30;
//     let b = 20;
//     let c = 30;
// }
// console.log(a)

// let a = 50;
// {
//     var a =30;
//     let b = 20;
//     let c = 30;
// }
// console.log(a)

// var a = 50;
// function fun() {
//     var a = 30;
//     let b = 20;
//     let c = 30;
// }
// fun();
// console.log(a)

// let a = 50;
// function fun() {
//     var a = 30;
//     let b = 20;
//     let c = 30;
// }
// fun();
// console.log(a)

// const a = 10;
// {
//     var a = 100;
// }
// console.log(a)

// const a = 10;
// {
//     const a = 20;
//     {
//         const a = 50;
//         console.log(a);
//     }
//     console.log(a)
// }
// console.log(a)

// const a = 10;
// {
//     const a = 20;
//     {
//         console.log(a);
//     }
//     console.log(a)
// }
// console.log(a)

// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function x() {
//     let a = 10;
//     function y() {
//         console.log(a);
//     }
//     y()
// }
// x();

// function x() {
//     let a = 10;
//     function y() {
//         return a;
//     }
//     console.log(y());
// }
// x();

// function x() {
//     let a = 10;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// // console.log(x());
// const z = x();
// console.log(z());

// function x() {
//     let a = 10;
//     function y() {
//         console.log(a);
//     }
//     a = 50;
//     return y;
// }
// const z = x()
// console.log(z());

// call apply and bind

// let name ={
//     firstName :"Arvind",
//     lastName: "Thakur",
//     fullName : function(){
//         console.log(this.firstName, this.lastName);
//     }
// }

// // name.fullName();

// let name2 = {
//     firstName: "Herdeep",
//     lastName : "Chauhan"
// }

// let name3 ={
//     firstName :"Ram",
//     lastName :"Thakur",
// }
// // function borrowing

// name.fullName.call(name2);
// name.fullName.call(name3);
// another way to do it

// const fullName = function(){
//     console.log(this.firstName, this.lastName);
// }

// let name ={
//     firstName :"Arvind",
//     lastName :"Thakur"
// }
// let name3 ={
//     firstName:"Herdeep",
//     lastName : "Chauhan"
// }
// let name4 ={
//     firstName :"Arjit",
//     lastName :"Singh"
// }
// // function borrowing start here
// fullName.call(name);
// fullName.call(name3);
// fullName.call(name4);

// const fullName = function (hometown, state) {
//     console.log(this.firstName + " " + this.lastName + " " + hometown +
//         " " + state);
// }

// let name = {
//     firstName: "Arvind",
//     lastName: "Thakur"
// }
// let name3 = {
//     firstName: "Herdeep",
//     lastName: "Chauhan"
// }
// let name4 = {
//     firstName: "Arjit",
//     lastName: "Singh"
// }
//  call function directly call function and takes the varibale
// arguments
// function borrowing start here
// fullName.call(name, "Surajpur","UP");
// fullName.call(name3, "Nijampur","UP");
// fullName.call(name4, "Nijampur","UP");

//  apply function directly call function and takes the array
// fullName.apply(name, ["Surajpur","UP"]);
// fullName.apply(name3,[ "Nijampur","UP"]);
// fullName.apply(name4,[ "Nijampur","UP"]);


// bind method it's return the copy
// let printmyName = fullName.bind(name, "Surajpur","UP");
// console.log(printmyName);
// printmyName();

// var obj = {
//     val: 100
// }
// function fun() {
//     console.log(this.val)
// }
// obj.fun();

// var obj = {
//     val: 100
// }
// function fun() {
//     console.log(this.val)
// }
// obj.fun();

// var obj = {
//     val: 100
// }
// function fun() {
//     console.log(this.val)
// }
// fun().call(obj)

// var obj = {
//     val: 100
// }
// function fun(a) {
//     console.log(this.val + a)
// }
// fun().call(obj)

// var obj = {
//     val: 100
// }
// function fun(a) {
//     console.log(this.val + a)
// }
// fun().call(obj, 3)

// var obj = {
//     val: 100
// }
// function fun(a, b, c) {
//     console.log(this.val + a + b + c)
// }
// fun().call(obj, 3, 4, 5)
// var obj = {
//     val: 100
// }
// function fun(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// fun().call(obj, [3, 4, 5])

// var obj = {
//     val: 100
// }
// function fun(a, b, c) {
//     console.log(this.val + a + b + c)
// }
// const fun2 = fun().bind(obj)
// fun2(1, 2, 3)

// call apply and bind fuction can be used to borrow the functionlity from the 
// object

// let add = function(c){
//     return this.a + this.b + c;
// }
// let obj={
//     a :1,
//     b :2
// }
// console.log(add.call(obj, 5));

// console.log([]);

// let argsToArray = function(){
//     // console.log(arguments);
//     console.log([].slice.call(arguments));
// }

// argsToArray(1,2,3,4,5);

// constructor and subconsturctor
// let mammel = function(legs){
//     this.legs = legs;
// }

// let cat = function(legs, isDomisticated){
//     mammel.call(this, legs);
//     this.isDomisticated = isDomisticated;
// }

// // create the object
// let lion = new cat(4, false);
// console.log(lion);

// let myArray = [1,2,3,4,5];
// console.log(Math.min.apply(null, myArray));
// console.log(Math.max.apply(null, myArray));
// console.log(Math.abs.apply(null, myArray));

// BIND
// let button = function(content){
//     this.content = content;
// }

// button.prototype.click = function(){
//     console.log(`${this.content} clicked`);
// }

// // create the object
// let newButton = new button('add');

// let looseButton = newButton.click;
// console.log(looseButton);
// looseButton();

// let bindButton = newButton.click.bind(newButton);
// bindButton();

// set time out and closures
// function hello(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         },1000*i);
//     }
//     console.log("Hello bhacha");
// }
// hello();
// function hello(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         },1000*i);
//     }
//     console.log("Hello bhacha");
// }
// hello();

// function hello(){
//     for(let i=1; i<=5; i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i);
//             },1000*i);
//         }
//         close(i);
//     }
//     console.log("Hello bhacha");
// }
// hello();
// function hello(){
//     for(let i=1; i<=5; i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             },1000*x);
//         }
//         close(i);
//     }
//     console.log("Hello bhacha");
// }
// hello();

// function outerfunction(){
//     var a =10;
//     function innerfunction(){
//         console.log(a);
//     }
//     return innerfunction;
// }

// // outerfunction()();
// const z = outerfunction();
// z();


// function outerfunction(){
//     function innerfunction(){
//         console.log(a);
//     }
//     let a =10;
//     return innerfunction;
// }

// // outerfunction()();
// const z = outerfunction();
// z();
// function outerfunction(b){
//     function innerfunction(){
//         console.log(a, b);
//     }
//     let a =10;
//     return innerfunction;
// }

// // outerfunction()();
// const z = outerfunction("hello");
// z();
// function outest(){
//     var c = 20;
//     function outerfunction(b){
//         function innerfunction(){
//             console.log(a, b,c);
//         }
//         let a =10;
//         return innerfunction;
//     }
//     return outerfunction;
// }

// // outerfunction()();
// // const z = outerfunction("hello");
// // z();

// // outest()("hello")();
// const close = outest()("hello");
// close();

// function outest(){
//     var c = 20;
//     function outerfunction(b){
//         function innerfunction(){
//             console.log(a, b,c);
//         }
//         // var a =10;
//         // let a =10;
//         return innerfunction;
//     }
//     return outerfunction;
// }

// let a =100;
// var a = 100;


// outerfunction()();
// const z = outerfunction("hello");
// z();

// outest()("hello")();
// const close = outest()("hello");
// close();

// closures can be used for data hiding
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

counter()();
counter()();
counter()();
counter()();
counter()();

