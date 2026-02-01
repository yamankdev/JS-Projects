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
    displayCount.classList.remove("negative");
    displayCount.classList.add("positive");
    //   updateCount();
    document.getElementById("count").innerHTML = count;
  }

  function decreaseCount() {
    displayCount.classList.remove("positive");
    displayCount.classList.add("negative");
    if (count > 0) {
      count--;
    }
    updateCount();
  }

  function resetCount() {
    count = 0;
    displayCount.classList.remove("positive");
    displayCount.classList.remove("negative");
    updateCount();
    showMsg("The Count has been Reset!");
  }

  function showMsg(text) {
    displayMsg.innerHTML = text;
    setTimeout(() => {
      displayMsg.innerHTML = "";
    }, 3000);
  }

  function saveCount() {
    localStorage.setItem("countValue", count);
    showMsg("The Count has been Saved!");
  }

  function loadCount() {
    const savedCount = localStorage.getItem("countValue");
    if (savedCount !== null) {
      count = parseInt(savedCount);
      showMsg("The Count has been Loaded!");
    } else {
      showMsg("No Saved Count Found.");
    }
    displayCount.classList.remove("positive");
    displayCount.classList.remove("negative");
    updateCount();
  }
});
