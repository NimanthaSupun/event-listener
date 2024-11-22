



var formTitle = document.getElementById('frmt');
console.log(formTitle);

formTitle.textContent = "Add Shooping items";
formTitle.innerText = "Shoping Items";
console.log(formTitle.textContent);
console.log(formTitle.innerText);

var navigation = document.getElementById('navbar')
navigation.style.backgroundColor = "red";
navigation.style.color = "White";


// Select items using class name

var items = document.getElementsByClassName('items');
console.log(items);

console.log(items[1]);
items[2].style.backgroundColor = 'Yellow'

for(var i of items){
    i.style.backgroundColor = "Yellow";
}

        //   element select using tag name

var li = document.getElementsByTagName('li');
li[2].style.backgroundColor = 'Yellow';

for (var i of li){
    i.style.backgroundColor = 'Red';
}


//           QUARY Selector ...

// ..id..

var input = document.querySelector('input');
input.style.backgroundColor = 'Yellow';
input.value = 'Paint bucket';

// class.....

//  quaryselector All

var hd = document.querySelectorAll('#hdt');
console.log(hd);

var dv = document.querySelectorAll('div');
console.log(dv);

var itm = document.querySelectorAll('.items');
console.log(itm);


var itemlist = document.querySelector('#li-items')
console.log(itemlist.parentNode);

// pesudo class

var odd = document.querySelectorAll('li:nth-chlid(odd)');
console.log(odd)




























