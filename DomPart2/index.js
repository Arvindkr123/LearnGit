var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter= document.getElementById('filter');

// from submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;
    
    // create the li item
    var li = document.createElement('li');
    // add class
    li.className ='list-group-item';
    li.appendChild(document.createTextNode(newItem));

    // create delete button
    var delButton = document.createElement('button');
    delButton.className='btn btn-danger btn-sm float-right delete';
    delButton.appendChild(document.createTextNode('X'));
    li.appendChild(delButton);
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter items
function filterItems(e){
    // 
    var text = e.target.value.toLowerCase();
    var getItem = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(itemList).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
}
