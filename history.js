const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, typeSpeed) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made: <span class="bold red">${errorCount}</span> mistakes</p>
  <p>Typing speed: <span class="bold green">${typeSpeed}</span> WPM</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.unshift({ questionText, timeTaken, errorCount, typeSpeed });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">${parseInt(test.timeTaken)}</span> seconds</p>
    <p>You made: <span class="bold red">${test.errorCount}</span> mistakes</p>
    <p>Typing speed: <span class="bold green">${test.typeSpeed}</span> WPM</p>
  `;

    histories.appendChild(newRow);
  });
}
