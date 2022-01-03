//#DONE

/*---Głowna funkcja---*/
document
  .getElementById("button-daily")
  .addEventListener("click", loadJsonDaily);
document
  .getElementById("button-weekly")
  .addEventListener("click", loadJsonWeekly);
document
  .getElementById("button-monthly")
  .addEventListener("click", loadJsonMonthly);
/*---tablica z id---*/
var tablicaId = [
  "hours-box-work",
  "hours-box-play",
  "hours-box-study",
  "hours-box-exercise",
  "hours-box-social",
  "hours-box-selfcare",
];

var tablicaIdBefore = [
  "before-box-work",
  "before-box-play",
  "before-box-study",
  "before-box-exercise",
  "before-box-social",
  "before-box-selfcare",
];

/*--- json parse---*/

function loadJsonDaily() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);

      for (let i = 0; 1 <= 6; i++) {
        var godzina = response[i].timeframes.daily.current;
        document.getElementById(tablicaId[i]).innerHTML = godzina + "hrs";
        var godzinaBefore = response[i].timeframes.daily.previous;
        document.getElementById(tablicaIdBefore[i]).innerHTML =
          "Yesterday - " + godzinaBefore + "hrs";
      }
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}

function loadJsonWeekly() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);

      for (let i = 0; 1 <= 6; i++) {
        var godzina = response[i].timeframes.weekly.current;
        document.getElementById(tablicaId[i]).innerHTML = godzina + "hrs";
        var godzinaBefore = response[i].timeframes.weekly.previous;
        document.getElementById(tablicaIdBefore[i]).innerHTML =
          "Pervious Week - " + godzinaBefore + "hrs";
      }
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}
function loadJsonMonthly() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);

      for (let i = 0; 1 <= 6; i++) {
        var godzina = response[i].timeframes.monthly.current;
        document.getElementById(tablicaId[i]).innerHTML = godzina + "hrs";
        var godzinaBefore = response[i].timeframes.monthly.previous;
        document.getElementById(tablicaIdBefore[i]).innerHTML =
          "Pervious Month - " + godzinaBefore + "hrs";
      }
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}
