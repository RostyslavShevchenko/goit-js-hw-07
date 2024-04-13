function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const containerForBoxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  containerForBoxes.innerHTML = '';

  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    containerForBoxes.appendChild(newBox);
    boxSize += 10;
  }
}

function destroyBoxes () {
  containerForBoxes.innerHTML = '';
};

  createBtn.addEventListener('click', function () {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value);

  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
  }

  createBoxes(amount);
  input.value = '';
  });

  destroyBtn.addEventListener('click', destroyBoxes);