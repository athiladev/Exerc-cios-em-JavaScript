function calcular() {
    let numero = document.getElementById('valor').value;
    let resultado;
    let tabuada = [];
    if (numero == "") {
        alert('Campo vazio!')
    } else {
        for (let i = 1; i <= 10; i++) {
            resultado = i * numero
            tabuada.push((i + ' x ' + numero + ' = ' + resultado + '</br>'))
            document.getElementById('valores').innerHTML = tabuada.join('');
        }
    }
}

function limpar() {
    document.getElementById('valor').value = "";
    document.getElementById('valores').innerHTML = "";
}
