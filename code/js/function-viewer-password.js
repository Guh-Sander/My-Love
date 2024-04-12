// Visualizador de senha
document.addEventListener('DOMContentLoaded', function() {
    let password = document.getElementById('password');
    let confirmPass = document.getElementById('confirm-password');

    let viewer = document.getElementById('viewer');
    let viewerOn = document.getElementById('viewer-on');
    let viewerClick = document.querySelector('.viewer-click');

    let viewerSecond = document.getElementById('viewer-second');
    let viewerOnS = document.getElementById('viewersecond-on');
    let viewerClickS = document.querySelector('.viewer-click2');

    viewerClick.onclick = () => {
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

    viewerClickS.onclick = () => {
        if (confirmPass.type === 'password') {
            viewerSecond.style.display = 'none';
            viewerOnS.style.display = 'block';
            confirmPass.type = 'text';
        } else {
            viewerSecond.style.display = 'block';
            viewerOnS.style.display = 'none';
            confirmPass.type = 'password';
        }
    };

    viewerOn.onclick = () => {
        viewer.style.display = 'block';
        viewerOn.style.display = 'none';
        password.type = 'password';
    };

    viewerOnS.onclick = () => {
        viewerSecond.style.display = 'block';
        viewerOnS.style.display = 'none';
        confirmPass.type = 'password';
    };
});