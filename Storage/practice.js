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

let arr =new Array([]);
let n=2;
let count = 0;
let flag = true;
while(count<20){
    for(let i=2; i<n; i++){
        if(n%i==0){
            flag=false;
            break;
        }
    }

    if(flag==true){
        arr[count] = n;
        count+=1;
    }
    n+=1;
} 

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}