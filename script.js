let calc = '';
    const element = document.getElementById("display-content");
    const crElement = document.getElementsByClassName("loader")[0]; //
    function calculate(op) {
      calc += op;
      element.innerText = calc;
    }
    function evaluateCalc() {
      element.innerText = eval(calc) || 0;
      crElement.innerText = ""
    }
    function clearDisplay() {
      calc = '';
      element.innerText = calc || 0;
      crElement.innerText = "|"
    }
    document.addEventListener('keydown', (e) => {
      // console.log(e.key);

      if (e.key == "=" || e.key == "Enter") {
        evaluateCalc();
      } else if (e.key == "Backspace") {
        calc = calc.substring(0, calc.length - 1) || '';  //
        element.innerText = calc || 0;                    //
      }
      else if (e.key.length == 1) {     //?
        calculate(e.key)
      }
    })