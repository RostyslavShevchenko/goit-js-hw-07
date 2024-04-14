function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  boxesContainer.innerHTML = '';

  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const newBox = document.createElement('div');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.push(newBox);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
