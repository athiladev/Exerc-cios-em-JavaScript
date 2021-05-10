let v1;
let v2;
let v3;
let c;
let v = []
let inicio = false;
function mostrarNumeros() {
    c = document.getElementById('valorDigitado').value;
    if (c == "") {
        alert('vazio!')
    } else if (inicio == false) {
        v1 = 0;
        v2 = 1
        for (let i = 1; i <= c; i++) {
            v3 = v1 + v2
            document.getElementById('valores').innerHTML = v;
            v1 = v2
            v2 = v3
            v.push(v3)
            inicio = true;
        }
    }
}