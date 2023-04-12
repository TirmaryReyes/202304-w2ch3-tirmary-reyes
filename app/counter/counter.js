let counter = 0;
const increaseNumber = document.querySelector(".increment");
const decreaseNumber = document.querySelector(".decrement");
const resetNumber = document.querySelector(".reset");
const feedbackMessage = document.querySelector(".feedback");
const counterNumber = document.querySelector(".display");

increaseNumber.addEventListener("click", () => {
  if (counter <= 14) {
    counter++;
    counterNumber.textContent = counter;
  } else {
    feedbackMessage.textContent = "El valor máximo es 15";
    setTimeout(() => {
      feedbackMessage.textContent = "";
    }, 2000);
  }
});

decreaseNumber.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    counterNumber.textContent = counter;
  } else {
    feedbackMessage.textContent = "El valor mínimo es 0";
    setTimeout(() => {
      feedbackMessage.textContent = "";
    }, 2000);
  }
});

resetNumber.addEventListener("click", () => {
  counter = 0;
  counterNumber.textContent = counter;
});
