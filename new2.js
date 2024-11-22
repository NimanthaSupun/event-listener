// child nodes

// var itemlist = document.querySelector('#li-items');

// console.log(itemlist.parentNode.parentNode);
// console.log(itemlist.parentElement);

// console.log(itemlist.childNodes);
// console.log(itemlist.children[2].textContent);

// console.log(itemlist.firstChild);
// console.log(itemlist.firstElementChild);

// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling)

var input = document.createElement('input');
input.className = 'test';
input.id = 'last';
input.setAttribute('type', 'test');
console.log(input);

var newDiv = document.createElement('div');
var newtest = document.createTextNode("How Are You");

newDiv.appendChild(newtest);

console.log(newDiv);

var form = document.querySelector(' .frm form');
var button = document.querySelector('.frm form button');
console.log(form);

input.style.backgroundColor = "Yellow";

form.insertBefore(input,button);


var d = document.querySelector(' .frm');
var h = document.querySelector(' .frm h3');

d.insertBefore(newDiv,h);






