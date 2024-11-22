
function btnclick(x){
    alert(x)
}


var button1 = document.getElementById('c-btn').addEventListener
('click',function(){
    alert("Button Click");
})

document.getElementById('c-btn').addEventListener
('mouseout',txtchange);

function txtchange(){
    alert("Mouse Out");
    document.getElementById('hdt').textContent = "Mouse Out";
}

document.getElementById('i-btn').addEventListener('click',
    function(){
        changelistback("Hello");
    });
function changelistback(x){
    document.getElementById('li-items').style.backgroundColor = "#ebca14";
    document.getElementById('li-items').firstElementChild.textContent = x;

}
var button2 = document.getElementById('e-btn').addEventListener
('click',clickbtn);
function clickbtn(){    
}


document.getElementById('myp1').addEventListener
('click',function(){
    alert("You Click the White element");  
}, false);


document.getElementById('mydiv1').addEventListener
('click',function(){
    alert("You Click the orange element");  
}, false);


document.getElementById('myp2').addEventListener
('click',function(){
    alert("You Click the White element");  
}, true);

document.getElementById('mydiv2').addEventListener
('click',function(){
    alert("You Click the orange element");  
}, true);

var btn = document.getElementById('box');
btn.addEventListener('mousemove',type);

function type(e){
    var ch = document.getElementById('box');

}

var keyinput = document.querySelector('input');
keyinput.addEventListener('keyup', type);

function type(e){
    console.log(e.type);
    console.log(e.target.value);
}

select

var select = document.querySelector('select');
select.addEventListener('change',type);


function type(e){
    console.log(e.type);

}
