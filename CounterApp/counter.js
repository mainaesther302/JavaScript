// Get DOM elements
const countDisplay = document.getElementById("vehicleCount");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

// Initial count value
let count = 0;

// Update display
function updateDisplay() {
  countDisplay.textContent = count;
}

// Increase
increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// Decrease (prevent below 0)
decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

