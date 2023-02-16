// function y() {
//     setTimeout(() => console.log("a"), 0)
//     console.log('Done Coding')
// }
// y();

// function y() {
//     for (let i = 1; i < 6; i++) {
//         setTimeout(() => console.log(i), i * 1000)
//     }
//     console.log('Done Coding')
// }
// y();
// function y() {
//     for (var i = 1; i < 6; i++) {
//         setTimeout(() => console.log(i), i * 1000)
//     }
//     console.log('Done Coding')
// }
// y();

const fun =(arr)=>{
    var count =0;
    return ()=>{
        console.log(`hello ${arr[count]}`);
        count++;
    }
}

const name = fun(['Ram','Shayam']);
name();
name();
