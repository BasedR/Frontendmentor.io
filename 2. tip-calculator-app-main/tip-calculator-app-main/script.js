function calculateBill(){  
 var billValue = document.getElementById("bill-value").value;  
var peopleValue = document.getElementById("people-value").value;

billValue = billValue / peopleValue;


 document.getElementById("tip-amount").innerHTML = "$"+ billValue;
}  