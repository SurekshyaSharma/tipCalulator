$(document).ready( function () {
   tipCalculator();
    clearfunction()
});
function tipCalculator(){
    console.log("let's get started");

    tipPer = document.getElementById("tip").value;
    totalAmount = document.getElementById("amount").value;
    number = document.getElementById("people").value;

    //converting string to float
    var p = parseFloat(tipPer);
    var a = parseFloat(totalAmount);
    var n = parseFloat(number);

        //console.log(a);

    //checking the inputs
     if (totalAmount == "")
     {
//         alert("Enter the valid amount");
     }
     else if
         (totalAmount == 0){
//             alert(" Enter the valid amount");
     }
     else if
         (number == 0){
//             alert("Enter the valid number");
     }else{

                
                tipCalculated = a /100 * p;

                finalTip = tipCalculated /number;
                //next line allows us to always have two digits after decimal point
                finalTip = finalTip.toFixed(2);

                console.log(finalTip);
                $("#calculation").empty(); 
                    $("#calculation").append(
                        '<div style="border:1px solid black" >'+
                        'Your tip Amount is $'+
                                finalTip+ "."+'</div>'
                        )

                }
              
    }
    
