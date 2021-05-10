
let inicializado = 0;
function Iniciar() {
   inicializado++;
   if (inicializado == 1) {
      let s = document.getElementById("segundos").innerHTML;
      let m = document.getElementById("minutos").innerHTML;
      let h = document.getElementById("horas").innerHTML;
      zerarCronometro = setInterval(function () {;
         document.getElementById('segundos').innerHTML = s;
         document.getElementById('minutos').innerHTML = m;
         document.getElementById('horas').innerHTML = h;

         horas.innerHTML = h < 10 ? '0' + h : h;
         minutos.innerHTML = m < 10 ? '0' + m : m;
         segundos.innerHTML = s < 10 ? '0' + s : s;

         if (s < 59) {
            s++
         }
         else if (m < 59) {
            s = 0;
            m++;
         } else if (h <= 24) {
            s = 0;
            m = 0;
            h++;

         }

      }, 1000);
   }
}

function Zerar() {
   clearInterval(zerarCronometro);
   document.getElementById('segundos').innerHTML = '0';
   document.getElementById('minutos').innerHTML = '0';
   document.getElementById('horas').innerHTML = '0';
   inicializado = 0;
}




