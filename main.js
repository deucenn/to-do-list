// DOM elements

const inputEl = document.getElementById('input');
const btnEl = document.getElementById('btn');
const listEl = document.getElementById('list');

// Event listeners

btnEl.addEventListener('click', handleClick);

// Functions

function handleClick(event) {
  event.preventDefault();

  const inputValue = inputEl.value;

  if (inputValue.length === 0){
    alert("Enter a task.");
  }

  if (inputValue) {
    const liEl = document.createElement('li');
    liEl.textContent = inputValue;
    listEl.appendChild(liEl);
  }

  inputEl.value = '';
}