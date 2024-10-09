const showPasswordIcon = document.querySelector('#showPassword');
const hidePasswordIcon = document.querySelector('#hidePassword');
const passwordInput = document.querySelector('#password');

showPasswordIcon.addEventListener('click', function () {
    passwordInput.setAttribute('type', 'text');
    showPasswordIcon.style.display = 'none';
    hidePasswordIcon.style.display = 'inline';
});

hidePasswordIcon.addEventListener('click', function () {
    passwordInput.setAttribute('type', 'password');
    hidePasswordIcon.style.display = 'none';
    showPasswordIcon.style.display = 'inline';
});



