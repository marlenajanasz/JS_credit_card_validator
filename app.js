      
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
          if(number.length !== 15 && number[0] === '4'){
            return true;
          } 
            return false;
        }
        //4 czy master card
        function canBeMaster(number) {
          if(number.length === 15 || number.length === 13){
            return false;
          }  else if ('51'<=number.substring(0,2)<='55' || '2221'<=number.substring(0,4)<='2720'){
            return true;
          } 
            return false;
        }
        //5 czy  to american
        function canBeAmerican(number) {
          if(number.length === 16 || number.length === 13){
            return false;
          } else if (number.substring(0,2)==='34' || number.substring(0,2)==='37'){
            return true;
          } 
            return false;
        }
        

        // ta wywołuje się na start 
        function checkCardNumber(number) {
	const cardType = document.getElementById("cardType");
	if (canBeNumber(number)) {
		if (canBeVisa(number)) {
			cardType.classList.add("visa");
			cardType.classList.remove("master");
			cardType.classList.remove("amex");
			cardType.classList.remove("other");
		} else if (canBeMaster(number)) {
			cardType.classList.add("master");
			cardType.classList.remove("visa");
			cardType.classList.remove("amex");
			cardType.classList.remove("other");
		} else if (canBeAmerican(number)) {
      cardType.classList.add("amex");
      cardType.classList.remove("master");
			cardType.classList.remove("visa");
			cardType.classList.remove("other");
		} else {
      cardType.classList.add("other");
      cardType.classList.remove("master");
			cardType.classList.remove("amex");
			cardType.classList.remove("visa");
		}
	} else {
		alert("Niewłaściwa długość karty!");
	}
}

        function inputValue(){
          const input = document.querySelector("input");
          if(input.value !== ""){
            checkCardNumber(input.value)
          }
          input.value = "";
        }

        document.querySelector("button").onclick = inputValue;



   
