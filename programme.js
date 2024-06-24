//COUNTER PROGRAM
const gayhero2 = document.getElementById('gayhero2'); // decrease
const gayhero3 = document.getElementById('gayhero3'); // reset 
const gayhero4 = document.getElementById('gayhero4'); // increase
const gayhero9 = document.getElementById('gayhero9'); // label

let count = 0;

gayhero4.onclick = function(){
    count++;
    gayhero9.textContent = count;
}

gayhero2.onclick = function(){
    count--;
    gayhero9.textContent = count;
}
gayhero3.onclick = function(){
    count = 0;
    gayhero9.textContent = count;
}