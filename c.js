const incrementBtn = document.querySelector('#increment')
console.log(incrementBtn)
const decrementBtn = document.querySelector('#decrement')
const resetBtn = document.querySelector('#reset')

const counterNumber= document.querySelector('#counter')
console.log(counterNumber)
let counter=0;

function incrementCounter(){
 counter++
 counterNumber.innerText = counter
}

function decrementCounter(){
 counter--
 counterNumber.innerText=counter;
  
}

function resetCounter(){
 counter=0;
 counterNumber.innerText=counter;
}

incrementBtn.addEventListener('click',incrementCounter)
decrementBtn .addEventListener('click',decrementCounter)
resetBtn.addEventListener('click',resetCounter)