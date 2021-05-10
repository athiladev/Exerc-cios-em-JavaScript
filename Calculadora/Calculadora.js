
let Resultado;
let verificarValor;
let umPonto = 0;
let primeiroZeroInput = true;

function chamaValores(tipo) {
    if (primeiroZeroInput == true) {
        document.getElementById("BoxNumero").value = "";
    }
    primeiroZeroInput = false;
    document.getElementById("BoxNumero").value += tipo;
    umPonto = 0;
}

//------------------------------------------------------------------------------------------------------//
function Limpar() {
    document.getElementById("BoxNumero").value = "";

}
//------------------------------------------------------------------------------------------------------//  

//------------------------------------------------------------------------------------------------------//
function chamaPonto() {
    if (umPonto == 0) {
        document.getElementById('BoxNumero').value += '.';
        umPonto = 1;
    }
}
//------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------//
function Calcular() {
    Resultado = document.getElementById("BoxNumero").value;
    document.getElementById("BoxNumero").value = eval(Resultado);
    verificarValor = document.getElementById("BoxNumero").value;
    if (Resultado == "") {
        alert('Campo Vazio!')
        document.getElementById("BoxNumero").value = "";
    } else if (verificarValor == 'Infinity') {
        alert('Valor infinito!')
        document.getElementById("BoxNumero").value = "";
    } else {
        Resultado = verificarValor;
        document.getElementById("BoxNumero").value = Resultado;
    }
}
    //------------------------------------------------------------------------------------------------------//




