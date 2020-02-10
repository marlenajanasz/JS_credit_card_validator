      
// 1 sprawdzenie czy jest samymi cyframi  -> ale type number w html to sprawdza???
      function onlyNumbers(number) {
          return /^\d+$/.test(number);
      };

      // 2 czy jest odpowiedniej długości
      function canBeNumber(number) {
        if (onlyNumbers(number)) {
          return [13, 15, 16].includes(number.length)
        }
        return false
      }

      // 3 czy to visa
      function canBeVisa(number) {
        if(number.length === 15){
          return false;
        } else if (number[0] === '4'){
          return true;
        }
      }
      //4 czy master card
      function canBeMaster(number) {
        if(number.length === 15 || number.length === 13){
          return false;
        }  else if ('51'<=number.substring(0,2)<='55' || '2221'<=number.substring(0,4)<='2720'){
          return true;
        }
      }
      //5 czy  to american
      function canBeAmerican(number) {
        if(number.length === 16 || number.length === 13){
          return false;
        } else if (number.substring(0,2)==='34' || number.substring(0,2)==='37'){
          return true;
        }
      }
      

      // ta wywołuje się na start 
      function checkCardNumber(number) {
          if (canBeNumber(number)) {
            if (canBeVisa(number)) {
              document.getElementById("cardType").classList.add("visa");
            //console.log('To karta Visa')
            }
            else if (canBeMaster(number)) {
              document.getElementById("cardType").classList.add("master");
            //console.log('Master card')
            }
            else if (canBeAmerican(number)) {
            document.getElementById("cardType").classList.add("amex");
            //console.log('American Express')
            }
            else {
            console.log('Karty nie rozpoznano')
            document.getElementById("cardType").classList.add("other");
            }
          }
          else {
            alert("Niewłaściwa długość karty!")
          }
      }

      function inputValue(){
        if(document.querySelector("input").value !== ""){
          checkCardNumber(document.querySelector("input").value)
        }
        document.querySelector("input").value = "";
      }

      document.querySelector("button").onclick = inputValue;

   