var pokreni = document.getElementById("pokreni");
pokreni.addEventListener("click", provera);

let regexSkolskiEmail = /^[A-z]{3,}\d{3,}\@raf\.edu\.rs$/;
var counter = 100;
var timerC;
function provera() {
  let ime = document.getElementById("ime").value;
  let prezime = document.getElementById("prezime").value;
  let brojIndeksa = document.getElementById("indeks").value;
  let godina = document.getElementById("godinaU").value;
  let email = document.getElementById("email").value;

  let duzinaPrezimena = prezime.length;
  let isValidEmail = regexSkolskiEmail.test(email);

  if (
    isValidEmail &&
    ime.charAt(0).toUpperCase() == email.charAt(0).toUpperCase() &&
    email.substr(1, duzinaPrezimena).toUpperCase() == prezime.toUpperCase() &&
    email.substr(duzinaPrezimena + 3, 2) == godina.substr(2, 2) &&
    email.includes(brojIndeksa)
  ) {
    alert("Upsesno uneti podaci");
  } else {
    broj1 =Math.ceil(Math.random() * 10);
    broj2 =Math.ceil(Math.random() * 10);
    while (broj2 == broj1) {
      broj2 = Math.ceil(Math.random() * 10);
    }
    let zagonetka1 = document.getElementById("zagonetka1");
    let zagonetka2 = document.getElementById("zagonetka2");

    let p1 = document.createElement("p");
    p1.setAttribute("id", "p1");
    p1.innerHTML = Object.keys(zagonetke[broj1])[0];
    zagonetka1.appendChild(p1);
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "input1");
    input.setAttribute("placeholder", "Unesite resenje");
    zagonetka1.appendChild(input);

    let p2 = document.createElement("p");
    p2.setAttribute("id", "p2");
    p2.innerHTML = Object.keys(zagonetke[broj2]);
    //console.log(Object.values(zagonetke[broj2])[0][0])
    zagonetka2.appendChild(p2);

    var s = document.createElement("div");
    s.setAttribute("id", "drugaz");
    for (let i = 0; i <= 2; i++) {
      let opt = document.createElement("button");
      opt.setAttribute("onclick", "proveriOdgovore(this)");
      opt.classList.add("dugmeResenje");
      opt.setAttribute("value", Object.values(zagonetke[broj2])[0][i]);
      opt.innerText = Object.values(zagonetke[broj2])[0][i];
      s.appendChild(opt);
    }
    zagonetka2.appendChild(s);

    document.getElementById("resenja").style.display = "block";
    document.getElementById("timer").style.display = "block";
    timerC = setInterval(timer, 1000);
  }
}

function proveriOdgovore(param) {
  let odgovor2 = param.innerText;

  if (
    document.getElementById("input1").value.toUpperCase() ==
      Object.values(zagonetke[broj1])[0][0].toUpperCase() &&
    odgovor2.toUpperCase() ==
      Object.values(zagonetke[broj2])[0][0].toUpperCase()
  ) {
    document.querySelector(".datumH").style.display = "block";
    document.getElementById("datum").addEventListener("blur", proveraDatuma);
    document.getElementById("datum").addEventListener("keyup", dodajCrticu);
    clearInterval(timerC);
  } else {
    clearInterval(timerC);
    document.getElementById("resenja").style.display = "none";
    document.querySelector(".datumH").style.display = "none";
    alert("Greska, niste resili zagonetku");
    window.location.reload();
  }
}

function proveraDatuma() {
  let datum = document.getElementById("datum").value;

  let day = Number(datum.substr(0, 2));

  let month = Number(datum.substr(3, 2));

  let year = Number(datum.substr(6, 4));

  var today = new Date();
  var birthday = new Date(year, month - 1, day);

  var differenceInMilisecond = today.valueOf() - birthday.valueOf();

  var year_age = Math.floor(differenceInMilisecond / 31536000000);
  var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

  if (isNaN(year_age) || isNaN(day_age)) {
    alert("Uneli ste pogresan datum pokusajte ponovo");
  }

  let plavi = document.createElement("div");
  let zuti = document.createElement("div");
  let kvadrati = document.getElementById("kvadrati");
  plavi.setAttribute("class", "plavi");
  localStorage.setItem("dani", JSON.stringify(day_age));
  plavi.setAttribute("onclick", "window.open('druga.html')");
  zuti.setAttribute("class", "zuti");

  plavi.innerText = day_age;
  zuti.innerText = year_age;
  kvadrati.appendChild(plavi);
  kvadrati.appendChild(zuti);
}

function timer() {
  document.getElementById("timer1").innerHTML = counter + " secs";
  counter = counter - 1;
  if (counter < 0) {
    clearInterval(timerC);
    document.getElementById("resenja").style.display = "none";
    document.querySelector(".datumH").style.display = "none";

    alert("Vreme je istekllo, niste resili zagonetku");
    window.location.reload();
    return;
  }
}

function dodajCrticu() {
  let vrednost = document.getElementById("datum").value.trim();

  if (vrednost.length == 2 || vrednost.length == 5) {
    vrednost += "-";
  }
  document.getElementById("datum").value = vrednost;
}
var zagonetke = [
  {
    "Travu pase, nije prase. Ima roge, nema noge. Bez nogu poljem šeće, bez kuće nikud neće": {
      0: "puz",
      1: "zmija",
      2: "ovca",
    },
  },
  {
    "Ja rodih majku, a majka rodi mene": {
      0: "Led i voda",
      1: " vatra i led",
      2: "vazduh i voda ",
    },
  },
  {
    "Četiri puške u jednu jamu pucaju": {
      0: "kravlje vime",
      1: "macije usi",
      2: "snajperisti",
    },
  },
  {
    "Žuto blago u bijeloj kući,ozora ni vrata, nitko ne može ući.": {
      0: "zumanjak",
      1: "mesec",
      2: "sunce",
    },
  },
  { "Bele koke ispod strehe vire": { 0: "zubi", 1: "usta", 2: "glava" } },
  { " Bez eksera na zidu visi.": { 0: "paucina", 1: "sneg", 2: "vatra" } },
  {
    "Vodi ide, vodu ne pije.": {
      0: "Zvono oko vrata životinje",
      1: "zvono na vratima",
      2: " zvono kola",
    },
  },
  { "Druge zove, sebe ne čuje": { 0: "zvono", 1: "kaseta", 2: "kola" } },
  { "Zimi putuje, leti hladuje": { 0: "sanke", 1: "auto", 2: "petao" } },
  { "Zvono, a ne zvoni": { 0: "visibaba", 1: "ljubicica", 2: "bela rada" } },
];
