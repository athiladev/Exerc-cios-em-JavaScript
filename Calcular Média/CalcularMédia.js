
function Calcular() {
    let n1 = parseInt(document.getElementById('n1').value)
    let n2 = parseInt(document.getElementById('n2').value)
    let n3 = parseInt(document.getElementById('n3').value)
    let n4 = parseInt(document.getElementById('n4').value)
    let Media;

    if (n1 == "" || n2 == "" || n3 == "" || n4 == "") {
        alert("Verifique os campos!")
    }
    else {
        Media = (n1 + n2 + n3 + n4) / 4;
        if (Media >= 7) {
            document.getElementById('media').innerHTML = Media;
            document.getElementById('final').innerHTML = 'APROVADO!!!';
        }
        else {
            document.getElementById('media').innerHTML = Media;
            document.getElementById('final').innerHTML = 'REPROVADO!!!';
        }
    }
}

function limparValor() {
    n1.value = 0;
    n2.value = 0;
    n3.value = 0;
    n4.value = 0;
    document.getElementById('media').innerHTML = "Nota";
    document.getElementById('final').innerHTML = "Resultado Final:";

}


