
let peso;
let altura;
let resultado;

function chamaFuncao() {
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    if (peso == "" || altura == "") {
        alert("Campo Vazio!!!")
        return;
    } else {
        resultado = peso / (altura * altura);
    }
    if (isNaN(resultado)) {
        document.getElementById('resultadoImc').innerHTML = 'Algo deu errado. Tente novamente!';
    } else {
        document.getElementById('resultadoImc').innerHTML = resultado.toFixed(2);
    }
}


