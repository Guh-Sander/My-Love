document.addEventListener('DOMContentLoaded', function() {
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let hertWhitePass = document.querySelector('.heart-whitepass');
    let hertPass = document.querySelector('.heart-password');
    let passwordError = document.getElementById('password-error');
    let characterSpecial = document.getElementById('character-special');
    let uppercase = document.getElementById('uppercase');
    let lowercase = document.getElementById('lowercase');
    let numberPass = document.getElementById('numberpass');
    let submit = document.getElementById('submit');

    function validatePassword() {
        if (password.value !== confirmPassword.value) {
            passwordError.style.display = 'block';
            hertWhitePass.style.display = 'inline';
            hertPass.style.display = 'none';
            submit.disabled = true; // Desativar o botão de enviar
        } else if (confirmPassword.value === undefined || confirmPassword.value === '') {
            passwordError.style.display = 'none';
            hertWhitePass.style.display = 'inline';
            hertPass.style.display = 'none';
        } else {
            passwordError.style.display = 'none';
            hertWhitePass.style.display = 'none';
            hertPass.style.display = 'inline';
            submit.disabled = false; // Ativar o botão de enviar
        }

        let regexSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        let regexUppercase = /[A-Z]+/;
        let regexLowercase = /[a-z]+/;
        let regexNumber = /[0-9]+/;

        if (regexSpecial.test(password.value)) {
            characterSpecial.style.display = 'none';
        } else {
            characterSpecial.style.display = 'block';
        }

        if (regexUppercase.test(password.value)) {
            uppercase.style.display = 'none';
        } else {
            uppercase.style.display = 'block';
        }

        if (regexLowercase.test(password.value)) {
            lowercase.style.display = 'none';
        } else {
            lowercase.style.display = 'block';
        }

        if (regexNumber.test(password.value)) {
            numberPass.style.display = 'none';
        } else {
            numberPass.style.display = 'block';
        }
    }

    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validatePassword);
});