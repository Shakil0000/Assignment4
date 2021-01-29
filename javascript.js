document.getElementById("minusBtnFirst").addEventListener("click",function(){
    var currentInputFirst = document.getElementById("currentInputFirst").value;
    var inputFloat = parseFloat(currentInputFirst);
    if (inputFloat <= 0) {
        inputFloat = 0;
    } 
    else {
        inputFloat--;   
    }
   document.getElementById("currentInputFirst").value=inputFloat;

   var firstInput = document.getElementById("currentInputFirst").value;
   var firstInputFloat = parseFloat(firstInput) * 150;
   var secondInput = document.getElementById("currentInputSecond").value;
   var secondInputFloat = parseFloat(secondInput) * 100;
   var subTotal = firstInputFloat + secondInputFloat;
   document.getElementById("subTotal").innerText = subTotal;
   var vat = subTotal/10.0;
   document.getElementById("vat").innerText = vat;
   var total = subTotal + vat;
   document.getElementById("total").innerText = total;
});






document.getElementById("plusBtnFirst").addEventListener("click",function(){
    var currentInputFirst = document.getElementById("currentInputFirst").value;
    var inputFloat = parseFloat(currentInputFirst);
        inputFloat++;   
   document.getElementById("currentInputFirst").value=inputFloat;

   var firstInput = document.getElementById("currentInputFirst").value;
   var firstInputFloat = parseFloat(firstInput) * 150;
   var secondInput = document.getElementById("currentInputSecond").value;
   var secondInputFloat = parseFloat(secondInput) * 100;
   var subTotal = firstInputFloat + secondInputFloat;
   document.getElementById("subTotal").innerText = subTotal;
   var vat = subTotal/10.0;
   document.getElementById("vat").innerText = vat;
   var total = subTotal + vat;
   document.getElementById("total").innerText = total;
});






//second section







document.getElementById("minusBtnSecond").addEventListener("click",function(){
    var currentInputFirst = document.getElementById("currentInputSecond").value;
    var inputFloat = parseFloat(currentInputFirst);
    if (inputFloat <= 0) {
        inputFloat = 0;
    } 
    else {
        inputFloat--;   
    }
   document.getElementById("currentInputSecond").value=inputFloat;

   
   var firstInput = document.getElementById("currentInputFirst").value;
   var firstInputFloat = parseFloat(firstInput) * 150;
   var secondInput = document.getElementById("currentInputSecond").value;
   var secondInputFloat = parseFloat(secondInput) * 100;
   var subTotal = firstInputFloat + secondInputFloat;
   document.getElementById("subTotal").innerText = subTotal;
   var vat = subTotal/10.0;
   document.getElementById("vat").innerText = vat;
   var total = subTotal + vat;
   document.getElementById("total").innerText = total;
});






document.getElementById("plusBtnSecond").addEventListener("click",function(){
    var currentInputFirst = document.getElementById("currentInputSecond").value;
    var inputFloat = parseFloat(currentInputFirst);
        inputFloat++;   
   document.getElementById("currentInputSecond").value=inputFloat;

   var firstInput = document.getElementById("currentInputFirst").value;
   var firstInputFloat = parseFloat(firstInput) * 150;
   var secondInput = document.getElementById("currentInputSecond").value;
   var secondInputFloat = parseFloat(secondInput) * 100;
   var subTotal = firstInputFloat + secondInputFloat;
   document.getElementById("subTotal").innerText = subTotal;
   var vat = subTotal/10.0;
   document.getElementById("vat").innerText = vat;
   var total = subTotal + vat;
   document.getElementById("total").innerText = total;
});



document.getElementById("bookNowBtn").addEventListener("click",function(){
    alert("Booking Success.Thank You.");
})























