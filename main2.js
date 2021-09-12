var dani = parseInt(JSON.parse(localStorage.getItem("dani")));
var danasnji = new Date();
var godina = danasnji.getFullYear();

var originalDay = new Date(864e5);

var numOfDays = dani;
var daysS = new Date(864e5 + parseInt(numOfDays * 864e5));
daysS.setFullYear(danasnji.getFullYear());
if (prestupna(godina) && dani > 59) {
  daysS.setDate = daysS.getDate() + 1;
}
console.log(daysS);
let d = daysS.getDate();
let m = daysS.getMonth()+1;
let g = daysS.getFullYear();
console.log(d, m, g);
document.getElementById("ispis").innerText = daysS;

function prestupna(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
