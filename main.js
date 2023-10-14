let minus = document.getElementById('Minus');
let plus = document.getElementById('Plus');
let value = document.getElementById('value');

var count = 0;

minus.addEventListener('click', function(){
    count--;
    value.innerHTML = count;
});

plus.addEventListener('click', function(){
    count++;
    value.innerHTML = count;
    
});

value.innerHTML = count;