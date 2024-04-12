document.addEventListener('DOMContentLoaded', function() {
    let buttonReset = document.getElementById('buttom-reset');
    let heartResetW = document.getElementsByClassName('heart-resetW');
    let heartReset = document.getElementsByClassName('heart-reset');
    let passwordError = document.getElementById('password-error');
    let characterSpecial = document.getElementById('character-special');
    let uppercase = document.getElementById('uppercase');
    let lowercase = document.getElementById('lowercase');
    let numberPass = document.getElementById('numberpass');

    // Adiciona um evento de click ao botão de redefinir
    buttonReset.addEventListener('click', function() {
        // Itera sobre todas as imagens de coração colorida
        for (let i = 0; i < heartReset.length; i++) {
            // Define a exibição da imagem de coração colorida como "none"
            heartReset[i].style.display = 'none';
            // Esconde a exibição de verificação das senhas
            passwordError.style.display = 'none';
            characterSpecial.style.display = 'none';
            uppercase.style.display = 'none';
            lowercase.style.display = 'none';
            numberPass.style.display = 'none';
            // Define a exibição da imagem de coração branca como "flex"
            heartResetW[i].style.display = 'flex';
        }
    });
});