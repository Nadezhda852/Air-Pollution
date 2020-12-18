    function validNo(){
       var n = document.getElementById("t5").value;
       var numbersOnly = "";
       var chars = ""; 
       if (n==""){
           alert("Phone number missing. Please enter a valid phone number to continue.");
           document.getElementById("t5").focus();
           return false;
       }
       else{
           for (i = 0; i < n.length; i++){
               chars = n.substring(i,i+1);
               if (chars >= "0" && chars <= "9"){
                   numbersOnly = numbersOnly + chars;
               }
           }
           if (numbersOnly.length != 13){
              alert("Incorrect phone number format.You must enter 13 numbers.");
              document.getElementById("t5").focus();
              return false;
           }
           else {
               var areacode = numbersOnly.substring(0,2);
               var leading0 = numbersOnly.substring(2,3);
               var exchange = numbersOnly.substring(3,5);
               var ext1 = numbersOnly.substring(5,9);
               var ext2 = numbersOnly.substring(9);
               var newNumber =( "+" + areacode + " " + "(" + leading0 + ") " + exchange + " " + ext1 + "-" + ext2);
               document.getElementById("t5").value = newNumber;
               return true;
           }
       }
   }