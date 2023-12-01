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
    listEl.appendChild(liEl);
  }

  inputEl.value = "";
}

// Delete task element

const delEl = document.getElementsByTagName("");

for (let i = 0; i < checkEl.length; i++) {
  const span = document.createElement("span");
  const text = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(text);
  delEl[i].appendChild(span);
}

const close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}