var percentArray = [0.05, 0.1, 0.15, 0.2, 0.25];

/*--wywyołanie funkcji--*/
document
  .querySelector(".grid-box > input")
  .addEventListener("keyup", customPercent);

function customPercent() {
  var x = document.querySelector(".grid-box > input").value;
  calculateBill(x / 100);
}
/*--główny kod---*/
function calculateBill(percent) {
  var billValue = document.getElementById("bill-value").value;
  var peopleValue = document.getElementById("people-value").value;
  var personBill;
  var tipAmount;

  tipAmount = (billValue / peopleValue) * percent;
  personBill = billValue / peopleValue + tipAmount;
  document.getElementById("tip-amount").innerHTML = "$" + roundToTwo(tipAmount);
  document.getElementById("total-amount").innerHTML =
    "$" + roundToTwo(personBill);
}
/*--zaokrąglanie--*/
function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

/*---funkcja resetująca aplikacje---*/

document.getElementById("reset-button").addEventListener("click", resetApp);

function resetApp() {
  document.getElementById("bill-value").value = 0;
  document.getElementById("people-value").value = 0;
  document.getElementById("total-amount").innerHTML = 0;
  document.getElementById("tip-amount").innerHTML = 0;
  document.querySelector(".grid-box > input").value = 0;
}
