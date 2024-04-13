const form = document.querySelector('.login-form');
console.dir(form);

form.addEventListener('submit', event => {
    event.preventDefault();

    const emailInput = form.elements.email.value.trim();
    const passlInput = form.elements.password.value.trim();

    if (emailInput === '' || passlInput === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailInput,
        password: passlInput,
    }
    console.log(formData);
    form.reset();
})