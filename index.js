// Import stylesheetsyol';
import './style.css';

// Write Javascript code!
let debounceTimer;
let hits = document.getElementsByClassName('hits');
let calc = document.getElementsByClassName('nothingCount');

let nothing = document.getElementById('nothingText');
let debounce = document.getElementById('Debouncing');
let throttle = document.getElementById('Throttling');
console.log(debounce, calc);
nothing.addEventListener('keyup', counter);
debounce.addEventListener('keyup', Dhandler);
throttle.addEventListener('keyup', Thandler);


function counter() {
  console.log('inside normal counter');

  console.log(nothing, nothing.value);
  calc[0].innerHTML = nothing.value;
}


function counterD() {
  console.log('inside Debounce counter');

  console.log(debounce, debounce.value);
  calc[1].innerHTML = debounce.value;
}

function counterT() {
  console.log('inside Throttle counter');

  console.log(throttle, throttle.value);
  calc[2].innerHTML = throttle.value;
}

//Debouncing
function Dhandler() {
  function debounceFunc(callback, time) {
    console.log('Inside debounce');
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(callback, time);
  }
  debounceFunc(counterD, 5000);
}
//Throttling
let throttleTimer;
function Thandler() {
  function throttleFunc(callback, time) {
    console.log('inside throttle');
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
      callback();
      throttleTimer = false;
    }, time);
  }
  throttleFunc(counterT, 5000);
}
