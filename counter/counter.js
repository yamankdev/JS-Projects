document.addEventListener("DOMContentLoaded", function () {
  let count = 0;

  const displayCount = document.getElementById("count");
  const incrementBtn = document.getElementById("incrBtn");
  const decrementBtn = document.getElementById("decrBtn");
  const resetBtn = document.getElementById("rstBtn");
  const saveBtn = document.getElementById("svBtn");
  const loadBtn = document.getElementById("ldBtn");
  const displayMsg = document.getElementById("msg");

  incrementBtn.addEventListener("click", increaseCount);
  decrementBtn.addEventListener("click", decreaseCount);
  resetBtn.addEventListener("click", resetCount);
  saveBtn.addEventListener("click", saveCount);
  loadBtn.addEventListener("click", loadCount);

  function updateCount() {
    displayCount.innerHTML = count;
  }

  function increaseCount() {
    count++;
    //   updateCount();
    document.getElementById("count").innerHTML = count;
  }

  function decreaseCount() {
    if (count > 0) {
      count--;
    }
    updateCount();
  }

  function resetCount() {
    count = 0;
    updateCount();
  }

  function saveCount() {
    localStorage.setItem("countValue", count);
    msgDisplay.innerHTML = "Count saved!";
  }

  function loadCount() {
    const savedCount = localStorage.getItem("countValue");
    if (savedCount !== null) {
      count = parseInt(savedCount);
      displayMsg.innerHTML = "Count loaded!";
    } else {
      displayMsg.innerHTML = "No saved count found.";
    }
    updateCount();
  }
});
