function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  const bodyEl = document.querySelector('body');
  const spanColor = document.querySelector('.color');
  const generateColor = getRandomHexColor();

  bodyEl.style.backgroundColor = generateColor;
  spanColor.textContent = generateColor;
});