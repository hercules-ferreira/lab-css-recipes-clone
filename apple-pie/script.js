let q = (el) => document.querySelector(el);
let bid = (el) => document.getElementById(el);
let w = (el) => document.write(el);
let c = (...el) => console.log(...el);

const hours = bid("hours");
const minutes = bid("minutes");
const seconds = bid("seconds");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (s < 10) s = "0" + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
});

function load() {
  let msg = bid("msg");
  let img = bid("imagem");
  let data = new Date();
  let hora = data.getHours();
  let m = data.getMinutes();
  let h = `${hora}:${m}`;

  if (hora >= 0 && hora < 12) {
    salutation.innerHTML = `Bonjour`;
    document.body.style.background = "#ff6781";
  } else if (hora >= 12 && hora <= 18) {
    salutation.innerHTML = `Bon après-midi`;
    document.body.style.background = "#4169E1";
  } else {
    salutation.innerHTML = `Bon Bonsoir`;
    document.body.style.background = "#515154";
  }
}
