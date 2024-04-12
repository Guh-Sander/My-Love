// Mascara para o input telefone
function masktel(v){
    v = v.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    v = v.replace(/^(\d{2})(\d)/g,"+$1 ($2"); // Adiciona o código do país e o primeiro par de parênteses
    v = v.replace(/(\d{2})(\d)/,"$1) $2"); // Adiciona o segundo par de parênteses
    v = v.replace(/(\d{5})(\d)/,"$1-$2"); // Adiciona o hífen após os primeiros cinco dígitos
    return v;
}

function idcss( el ){
    return document.getElementById( el );
}

window.onload = function() {      
    // TELEFONE
    idcss('tel').setAttribute('maxlength', 19);
    idcss('tel').onkeypress = function() {
        this.value = masktel(this.value);
    }
}