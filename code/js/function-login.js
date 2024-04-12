// Verifica se a senha atende determinadas definições
 document.addEventListener('DOMContentLoaded', function() {
    let password = document.getElementById('password');
    let characterSpecial = document.getElementById('character-special');
    let uppercase = document.getElementById('uppercase');
    let lowercase = document.getElementById('lowercase');
    let numberPass = document.getElementById('numberpass');
    let submit = document.getElementById('submit');
    let regexSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let regexUppercase = /[A-Z]+/;
    let regexLowercase = /[a-z]+/;
    let regexNumber = /[0-9]+/;
    let phearts = document.getElementsByClassName('pheart');
    let pheartsWhite = document.getElementsByClassName('pheart-white');

    function validatePassword() {
        if (!regexSpecial.test(password.value) || !regexUppercase.test(password.value) || !regexLowercase.test(password.value) || !regexNumber.test(password.value)) {
            characterSpecial.style.display = regexSpecial.test(password.value) ? 'none' : 'block';
            uppercase.style.display = regexUppercase.test(password.value) ? 'none' : 'block';
            lowercase.style.display = regexLowercase.test(password.value) ? 'none' : 'block';
            numberPass.style.display = regexNumber.test(password.value) ? 'none' : 'block';
            for (let i = 0; i < phearts.length; i++) {
                phearts[i].style.display = 'none';
                pheartsWhite[i].style.display = 'block';
            }
            submit.disabled = true;
        } else {
            characterSpecial.style.display = 'none';
            uppercase.style.display = 'none';
            lowercase.style.display = 'none';
            numberPass.style.display = 'none';
            for (let i = 0; i < phearts.length; i++) {
                phearts[i].style.display = 'block';
                pheartsWhite[i].style.display = 'none';
            }
            submit.disabled = false;
        }
    }

    password.addEventListener('input', validatePassword);
});

 // Visualizador de senha
 document.addEventListener('DOMContentLoaded', function() {
    let password = document.getElementById('password');
    let viewer = document.getElementById('viewer');
    let viewerOn = document.getElementById('viewer-on');

    viewer.onclick = () => {
        if (password.type === 'password') {
            viewer.style.display = 'none';
            viewerOn.style.display = 'block';
            password.type = 'text';
        } else {
            viewer.style.display = 'block';
            viewerOn.style.display = 'none';
            password.type = 'password';
        }
    };

    viewerOn.onclick = () => {
        viewer.style.display = 'block';
        viewerOn.style.display = 'none';
        password.type = 'password';
    };
});

// Adiciona evento ao clicar o botão redefinir, escondendo as definições de senhas expostas no Html e trocando os corações
document.addEventListener('DOMContentLoaded', function() {
    let buttonReset = document.getElementById('buttom-reset');
    let heartResetW = document.getElementsByClassName('heart-resetW');
    let heartReset = document.getElementsByClassName('heart-reset');
    let characterSpecial = document.getElementById('character-special');
    let uppercase = document.getElementById('uppercase');
    let lowercase = document.getElementById('lowercase');
    let numberPass = document.getElementById('numberpass');

    // Adiciona um evento de click ao botão de redefinir
    buttonReset.addEventListener('click', function() {
        // Itera sobre todas as imagens de coração colorida
        for (let i = 0; i < heartReset.length; i++) {
            // Verifica se a senha especial está sendo exibida
            if (characterSpecial.style.display === 'block') {
                characterSpecial.style.display = 'none'; // Oculta a mensagem de senha especial
            }
            // Verifica se a senha de letra maiúscula está sendo exibida
            if (uppercase.style.display === 'block') {
                uppercase.style.display = 'none'; // Oculta a mensagem de senha de letra maiúscula
            }
            // Verifica se a senha de letra minúscula está sendo exibida
            if (lowercase.style.display === 'block') {
                lowercase.style.display = 'none'; // Oculta a mensagem de senha de letra minúscula
            }
            // Verifica se a senha de número está sendo exibida
            if (numberPass.style.display === 'block') {
                numberPass.style.display = 'none'; // Oculta a mensagem de senha de número
            }

            // Define a exibição da imagem de coração colorida como "none"
            heartReset[i].style.display = 'none';
            // Define a exibição da imagem de coração branca como "flex"
            heartResetW[i].style.display = 'flex';
        }
    });
});