let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let counterValue = document.querySelector("#counterValue");

let counter = 0;

increment.addEventListener("click", ()=>{
    counter++;
    counterValue.innerHTML = counter;
});
decrement.addEventListener("click", ()=>{
    counter--;
    counterValue.innerHTML = counter;
});
