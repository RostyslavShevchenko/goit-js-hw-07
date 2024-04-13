const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', event => {
    const nameInput = event.currentTarget.value.trim();
    const nameOutput = document.querySelector('#name-output');

    if (nameInput === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = nameInput;
    }
});