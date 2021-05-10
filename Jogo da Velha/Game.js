
let marcador = 'X';
let vencedor = false;
let velha = 0;
let venceu;

//-------------------------------------------------------------------------------//
function comecarGame(tipo) {
    let quadrado1 = document.getElementById('b1').innerHTML;
    let quadrado2 = document.getElementById('b2').innerHTML;
    let quadrado3 = document.getElementById('b3').innerHTML;
    let quadrado4 = document.getElementById('b4').innerHTML;
    let quadrado5 = document.getElementById('b5').innerHTML;
    let quadrado6 = document.getElementById('b6').innerHTML;
    let quadrado7 = document.getElementById('b7').innerHTML;
    let quadrado8 = document.getElementById('b8').innerHTML;
    let quadrado9 = document.getElementById('b9').innerHTML;

    if (vencedor) {
        return;
    } else {
        if (tipo == 1 && quadrado1 == "") {
            document.getElementById('b1').innerHTML = ("<div style='text-align:center; color:#1C1C1C; margin:-20px auto auto -5px; font-size:100px;'>" + marcador + "<b>");
        } else if (tipo == 2 && quadrado2 == "") {
            document.getElementById('b2').innerHTML = ("<div style='text-align:center; color:#1C1C1C; margin:-20px auto auto -5px; font-size:100px;'>" + marcador + "<b>");
        } else if (tipo == 3 && quadrado3 == "") {
            document.getElementById('b3').innerHTML = ("<div style='text-align:center; color:#1C1C1C; margin:-20px auto auto -5px; font-size:100px;'>" + marcador + "<b>");
        } else if (tipo == 4 && quadrado4 == "") {
            document.getElementById('b4').innerHTML = ("<div style='text-align:center; color:#1C1C1C; margin:-20px auto auto -5px; font-size:100px;'>" + marcador + "<b>");
        } else if (tipo == 5 && quadrado5 == "") {
            document.getElementById('b5').innerHTML = ("<div style='text-align:center; color:#1C1C1C; margin:-20px auto auto -5px; font-size:100px;'>" + marcador + "<b>");
        } else if (tipo == 6 && quadrado6 == "") {
            document.getElementById('b6').innerHTML = ("<div style='text-align:center; color:#1C1C1C; margin:-20px auto auto -5px; font-size:100px;'>" + marcador + "<b>");
        } else if (tipo == 7 && quadrado7 == "") {
            document.getElementById('b7').innerHTML = ("<div style='text-align:center; color:#1C1C1C; margin:-20px auto auto -5px; font-size:100px;'>" + marcador + "<b>");
        } else if (tipo == 8 && quadrado8 == "") {
            document.getElementById('b8').innerHTML = ("<div style='text-align:center; color:#1C1C1C; margin:-20px auto auto -5px; font-size:100px;'>" + marcador + "<b>");
        } else if (tipo == 9 && quadrado9 == "") {
            document.getElementById('b9').innerHTML = ("<div style='text-align:center; color:#1C1C1C; margin:-20px auto auto -5px; font-size:100px;'>" + marcador + "<b>");;
        } else {
            alert('Lugar já preenchido!!!')
            return;
        }


    }
    //-------------------------------------------------------------------------------//
    validarVencedor();
    trocaJogador()
    verificarVelha()


}
//-------------------------------------------------------------------------------//



function trocaJogador() {
    if (marcador == 'X') {
        marcador = 'O';
    } else {
        marcador = 'X';
    }
}






//-------------------------------------------------------------------------------//		
function validarVencedor() {

    saoIguais(0, 1, 2)
    saoIguais(3, 4, 5)
    saoIguais(6, 7, 8)
    saoIguais(0, 3, 6)
    saoIguais(1, 4, 7)
    saoIguais(2, 5, 8)
    saoIguais(0, 4, 8)
    saoIguais(2, 4, 6)
}
//-------------------------------------------------------------------------------//
function saoIguais(a, b, c) {

    let bots = document.querySelectorAll('.bot');
    let x = bots[a].innerText
    let y = bots[b].innerText
    let z = bots[c].innerText

    venceu = x == y && y == z && x != '';
    if (venceu) {
        alert(`O jogador ${marcador} venceu!`)
        vencedor = true;
        return;
    }

}
//-------------------------------------------------------------------------------//
function verificarVelha() {
    velha = velha + 1;
    if (velha == 9 && vencedor != true) {
        alert("DEU VELHA!")
    }
}
//-------------------------------------------------------------------------------//