// DOM elements

const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");
const listEl = document.getElementById("list");

// Event listeners

btnEl.addEventListener("click", handleClick);

// Add new task element

function handleClick(event) {
  event.preventDefault();

  const inputValue = inputEl.value;

  if (inputValue.length === 0) {
    alert("Nothing to do, huh?");
  }

  if (inputValue) {
    const liEl = document.createElement("li");
    liEl.textContent = inputValue;

    // Create close button
    const span = document.createElement("span");
    const text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    liEl.appendChild(span);

    // Add close button click event
    span.onclick = function () {
      liEl.style.display = "none";
    };

    listEl.appendChild(liEl);
  }

  inputEl.value = "";
}

// Add checkmark

listEl.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);
