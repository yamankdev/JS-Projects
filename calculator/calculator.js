document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("display");
  let resetBtn = document.getElementById("reset-btn");
  let backSpaceBtn = document.getElementById("back-space");
  let valBtns = document.querySelectorAll(".val");
  let resultBtn = document.getElementById("result-btn");

  resetBtn.addEventListener("click", resetDisplay);
  backSpaceBtn.addEventListener("click", backSpace);
  resultBtn.addEventListener("click", getResult);
  valBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      appendToDisplay(btn.innerText);
    });
  });

  function resetDisplay() {
    display.value = "";
  }

  function backSpace() {
    let val = display.value;
    val = val.slice(0, val.length - 1);
    display.value = val;
  }

  function appendToDisplay(input) {
    display.value += input;
  }

  function getResult() {
    if (display.value === "") {
      display.value = "";
    } else {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.error = e;
      }
    }
  }
});
