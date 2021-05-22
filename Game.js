
var optionJgd, optionMqn;
var p, m;
var Points;
var empates = 0;
var player = 0;
var maquina = 0;
var JogoIniciado = false;
//---------------------------------------------------------//
if (JogoIniciado == false) {
    function OptionPlayer(option) {
        optionJgd = option;
        optionMqn = Math.floor(Math.random() * 3) + 1
        p = optionJgd;
        m = optionMqn;

        if (p == 1 && m == 3) {
            Points = 1;
        } else if (p == 2 && m == 1) {
            Points = 1;
        } else if (p == 3 && m == 2) {
            Points = 1;
        } else if (m == 1 && p == 3) {
            Points = 2;
        } else if (m == 2 && p == 1) {
            Points = 2;
        } else if (m == 3 && p == 2) {
            Points = 2;
        } else if (p == 1 && m == 1) {
            Points = 0;
        } else if (p == 2 && m == 2) {
            Points = 0;
        } else if (p == 3 && m == 3) {
            Points = 0;

        }
        if (Points == 1) {
            document.getElementById('pontuacaoJogador').innerHTML = player += 1;
            document.getElementById('vencedor').innerHTML = 'Jogador Venceu!!!';
        } else if (Points == 2) {
            document.getElementById('pontuacaoMaquina').innerHTML = maquina += 1;
            document.getElementById('vencedor').innerHTML = 'Máquina Venceu!!!';
        } else if (Points == 0) {
            document.getElementById('vencedor').innerHTML = 'Empate!!!';
            document.getElementById('empates').innerHTML = empates += 1;
        }
    }

    function OptionMachine() {
        alert("Erro ao clicar na imagem. Tente novamente!!!");
    }
}

function encerrarGame() {
    if (player > maquina) {
        alert("Jogador venceu com maior pontuação!!!");
    } else if (player < maquina) {
        alert("Máquina venceu com maior pontuação!!!");
    } else if (player == maquina) {
        alert('Houve um empate!')
    }
    player = 0;
    maquina = 0;
    empates = 0;
    document.getElementById('pontuacaoJogador').innerHTML = 0;
    document.getElementById('pontuacaoMaquina').innerHTML = 0;
    document.getElementById('empates').innerHTML = 0;
    document.getElementById('vencedor').innerHTML = 'Vencedor aqui';

}

