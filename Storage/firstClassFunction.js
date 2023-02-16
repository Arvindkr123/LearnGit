// first class function in Java Script 

// in hoisting case
// a()
// b() // is giving the error


// function Statement aka  function declaration
// function a(){
//     console.log("a there");
// }
// a()
// function Expression when act like a variable then we called 
// function expression
// const b = function(){
//     console.log("b there");
// }
// b()

// anonymous function
//  we can say that function statement which doesn't have name 
// we called the annoums function 
// function(){
//     console.log("Hello ");
// }

// Named function Expression 
// function expression + function statment
// const c = function xyz(){
//     console.log("Hello ggggg"); 
//     console.log(xyz);
// }
// c()

// diff b/w parameter and argument i know parameter and argument
// first class function
// const a = function(para1, para2){
//     console.log(para2);
// }

// a(function(){
// })
// a(function xyz(){
// })
// a();
// first class function ability to used like the values
// const a = function(para1){
//     return function(){
//         console.log("badass");
//     }
// }

// a()();
// const b = a();
// console.log(b);
// b()
// arrow function
// const a  =()=>{
//     console.log("HEllo trutue turutue");
// }
// a()

// currying in function
// let multiply = function(a, b){
//     console.log(a * b);
// }

// let multiplyByTwo = multiply.bind(this,2,3);
// let multiplyByThree =  multiply.bind(this, 3);
// // multiplyByTwo(5, 6); 
// multiplyByTwo();
// multiplyByThree(5);

// do with help of closures

// const multiply = function(x){
//     return function(y){
//         console.log(x*y);
//     }
// }

// multiply(2)(3);
// const multiply2 = multiply(2);
// multiply2(3); 
// // multiply(5)(6);
// const multiply5 = multiply(5);
// multiply5(6);
// // multiply(2)(7);
// const multiply7 = multiply(7);
// multiply7(2);

// function fun1(){
//     console.log("a");
//     return ()=>{
//         console.log("B");
//     }
// }
// fun1()();

// function fun1(){
//     var a =10;
//     return function(){
//         a = 20;
//         console.log(a);
//     }
// }

// fun1()();

// This
// create the table in global scope
// this.table = "window table"
// const cleanTable = function(){
//     console.log(`cleaning ${this.table}`);
// }
// // console.log(window.table);

// this.garge = {
//     table :"garge table",
//     cleanTable(){
//         console.log(`cleaning ${this.table}`);
//     }
// }
// console.log(garge.table);

// // create the room private object
// let JhonsRooms = {
//     table :'jhons table',
//     cleanTable(){
//         console.log(`cleaning ${this.table}`);
//     }
// }
// console.log(JhonsRooms.cleanTable);
// console.log(JhonsRooms.table);
// JhonsRooms.cleanTable();
// // console.log(JhonsRooms.cleanTable());
// this.garge.cleanTable();

// this.table = "window table";
// const cleanTable = function(soap){
//     const that = this;
//     const innerFunction = function(soap){
//         console.log(`Cleaning  ${that.table} using some ${soap}`);
//     }
//     innerFunction('soap');
// }

// this.garge = {
//     table :"garge table"
// }

// let jhonsRooms ={
//     table:"johns room table"
// }

// cleanTable.call(this, 'soap')
// cleanTable.call(this.garge, "sampo")
// cleanTable.call(jhonsRooms, "sampoo");

// this.table = "window table";
// const cleanTable = function(soap){
//     // const that = this;
//     // const innerFunction = function(soap){
//     //     console.log(`Cleaning  ${this.table} using some ${soap}`);
//     // }
//     // // innerFunction.call(this, 'soap');
//     // innerFunction.bind(this)('soap')

//     const innerFunction=(_soap)=>{
//         console.log(`cleaning ${this.table} using ${_soap}`);
//     }
//     innerFunction(soap)
// }

// this.garge = {
//     table :"garge table"
// }

// let jhonsRooms ={
//     table:"johns room table"
// }

// let createRoom = function(name){
//     this.table = `${name}s table`
// }

// createRoom.prototype.cleanTable = function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`);
// }

// const arvindRoom = new createRoom('arvind');
// const vijayRooms = new createRoom('vijay');
// arvindRoom.cleanTable('sarf')
// vijayRooms.cleanTable('sampoo');

// // cleanTable.call(this, 'soap')
// // cleanTable.call(this.garge, "sampo")
// // cleanTable.call(jhonsRooms, "sampoo");


// class CreateRoom{
//     constructor(name){
//         this.table = `${name}s table`
//     }

//     cleanTable(soap){
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
// }

// const arvind  = new CreateRoom('Arvind');
// const ram = new CreateRoom('ram');
// ram.cleanTable('sampoo');
// arvind.cleanTable('sampoo')

// class Student{
//     static increaseStudentCount =0;
//     constructor(name, age, phoneNumber, marks){
//         this.name = name;
//         this.age = age;
//         this.phoneNumber = phoneNumber;
//         this.marks = marks;
//         Student.increaseStudentCount++;
//     }

//     check_eligible(){
//         if(this.marks<40){
//             console.log(`${this.name} age ${this.age} not eligible`);
//         }else{
//             console.log(`${this.name} age ${this.age} eligible`);
//         }
//     }
//     printStudentCount(){
//         console.log(Student.increaseStudentCount);
//     }
// }

// // const student1 = new Student('Arvind', 22, 9315207665, 40);
// const s1 = new Student('Riya',18,123,18);
// const s2 = new Student('Diya',15,123,18);
// const s3 = new Student('Hiya',16,123,40);
// s1.printStudentCount();
// s1.check_eligible();
// s2.check_eligible();
// s3.check_eligible();

class Student{
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    
}
