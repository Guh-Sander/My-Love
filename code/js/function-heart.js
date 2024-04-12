document.addEventListener('DOMContentLoaded', function() {
    let inputs = document.querySelectorAll('.question');
    let passwordInput = document.getElementById('password');

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', function() {
            let heartWhite = this.closest('label').querySelector('.heart-resetW');
            let heartRed = this.closest('label').querySelector('.heart-reset');

            if (this.value.trim() !== '') {
                heartWhite.style.display = 'none';
                heartRed.style.display = 'inline';
            } else {
                heartWhite.style.display = 'inline';
                heartRed.style.display = 'none';
            }
        });
    }  

    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            let pheartWhite = this.closest('label').querySelector('.pheart-white');
            let pheartRed = this.closest('label').querySelector('.pheart');

            if (this.value.trim() !== '') {
                pheartWhite.style.display = 'none';
                pheartRed.style.display = 'inline';
            } else {
                pheartWhite.style.display = 'inline';
                pheartRed.style.display = 'none';
            }
        });
    }
});