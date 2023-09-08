const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

// initial count value
let count = 0;

// function to update count
function updateCount() {
  countElement.innerText = count;
}

// event listener for increment button

incrementButton.addEventListener("click", () => {
  count++;
  updateCount();
});

// event listener for decrement button
decrementButton.addEventListener("click", () => {
  count--;
  updateCount();
});

// initialising the count 
updateCount();  // this will set the count to 0 when the page loads