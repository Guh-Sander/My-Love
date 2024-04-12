document.addEventListener('DOMContentLoaded', function() {
    let radioButtons = document.getElementsByClassName('love-me');

    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('click', function() {
            // Oculta todas as imagens de coração branco
            let heartWhiteBoxes = document.querySelectorAll('.heart-whitebox');
            heartWhiteBoxes.forEach(function(element) {
                element.style.display = 'none';
            });

            // Exibe todas as imagens de coração colorido
            let heartBoxes = document.querySelectorAll('.heartbox');
            heartBoxes.forEach(function(element) {
                element.style.display = 'inline';
            });

            let rosaWhiteImages = document.querySelectorAll('.rosa-white');
            let rosaImages = document.querySelectorAll('.rosa');

            // Oculta todas as imagens rosa brancas
            rosaWhiteImages.forEach(function(element) {
                element.style.display = 'inline';
            });

            // Oculta todas as imagens rosa coloridas
            rosaImages.forEach(function(element) {
                element.style.display = 'none';
            });

            // Exibe a imagem correspondente à opção atualmente selecionada
            let selectedOption = this.parentNode.querySelector('.rosa-white');
            selectedOption.style.display = 'none';

            let selectedRosa = this.parentNode.querySelector('.rosa');
            selectedRosa.style.display = 'inline';
        });
    }
});