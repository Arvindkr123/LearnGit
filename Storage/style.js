// function saveToLocalStorage(e){
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const phone = e.target.tel.value;

//     // localStorage.setItem('name',name);
//     // localStorage.setItem('email',email);
//     // localStorage.setItem('phone',phone);

//     const myObj = {
//         name,
//         email,
//         phone
//     }

//     localStorage.setItem(myObj.email, JSON.stringify(myObj));
//     showUserOnScreen(myObj);
// }

// function showUserOnScreen(obj){
//     const parentElem = document.getElementById('items');
//     const li = document.createElement('li');
//     li.textContent= obj.name+"-"+obj.email+"-"+obj.phone;

//     // parentElem.innerHTML = `<li>${obj.email}--${obj.name}--${obj.phone}</li>`;

//     const deleteButton = document.createElement('input');
//     deleteButton.type = 'button';
//     deleteButton.value = 'delete';
//     deleteButton.onclick=()=>{
//         localStorage.removeItem(obj.email);
//         parentElem.removeChild(li);
//     }
//     li.appendChild(deleteButton);
//     parentElem.appendChild(li);

//     // first add the edit button
//     const editButton = document.createElement('input');
//     editButton.type='button';
//     editButton.value = 'Edit';
//     editButton.onclick=()=>{
//         localStorage.removeItem(obj.email);
//         parentElem.removeChild(li);
//         document.getElementById('name').value = obj.name;
//         document.getElementById('email').value = obj.email;
//         document.getElementById('tel').value = obj.phone;
//     }
//     li.appendChild(editButton);
//     parentElem.appendChild(li);
// }





// // let myObj = {
// //     name:'Arvind',
// //     age:22,
// // };

// // let myobj_serialized = JSON.stringify(myObj);
// // localStorage.setItem("Myobj",myobj_serialized);
// // // console.log(localStorage);

// // let myObj_deserialized = JSON.parse(localStorage.getItem(myObj));
// // console.log(myObj_deserialized);

'use strict';

process.stdin.setEncoding('utf-8');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var remove3rdlastElem = function(head) {
    
    let temp = head;
    let back = temp;
    while(temp !== null) {
        if(temp.next.next === null) break;
        if(temp.next.next.next === null){
            back.next = temp.next;
            break;
        }
        back = temp;
        temp = temp.next;
    }
    printLinkList(head);
};
//Dont change anything below. If changed click on reset.
function printLinkList(head){
    var current = head;
    var linklistString = ''
    while(current.next){
      
        linklistString = linklistString + current.val + '->'
        current = current.next
    }
    linklistString = linklistString + current.val
    console.log(linklistString)
}
//Dont change anything below. If changed click on reset.
function ListNode(val,next) {
  return {
    val: val,
    next: next==undefined?null:next,
  };
}
async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            var linklistvalues = inputArr[0].split('->');
            var head=ListNode(parseInt(linklistvalues[0]));
            var temp =head;
            var count=2;
            for(var i=1;i<linklistvalues.length;i++)
            {
                var new_node = ListNode(parseInt(linklistvalues[i]));
                count=count+1;
                temp.next=new_node;
                temp=new_node;
            }
        var output = remove3rdlastElem(head);
            process.exit();
        })
}
readInput();