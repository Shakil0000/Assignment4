                               // For Minus Button
function minusButton(id){
    var currentInpt = document.getElementById(id).value;
    var currentInptFloat = parseFloat(currentInpt);

    if (currentInptFloat <= 0) {
          currentInptFloat = 0;
    } 
    else {
        currentInptFloat--;
    }
    document.getElementById(id).value = currentInptFloat;

    subtotalVatTotal();

 }


                             //For Plus Button
function plusButton(id){
    var currentInpt = document.getElementById(id).value;
    var currentInptFloat = parseFloat(currentInpt);

    
        currentInptFloat++;
    
    document.getElementById(id).value = currentInptFloat;

    subtotalVatTotal();

}

                            // For subtotal,Vat,Total 
function subtotalVatTotal(){
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
 }


document.getElementById("plusBtnFirst").addEventListener("click",function(){
    plusButton("currentInputFirst");
});
document.getElementById("minusBtnFirst").addEventListener("click",function(){
    minusButton("currentInputFirst");
});
document.getElementById("plusBtnSecond").addEventListener("click",function(){
    plusButton("currentInputSecond");
});
document.getElementById("minusBtnSecond").addEventListener("click",function(){
    minusButton("currentInputSecond");
});


document.getElementById("bookNowBtn").addEventListener("click",function(){
    alert("Booking Success.Thank You.");
})
