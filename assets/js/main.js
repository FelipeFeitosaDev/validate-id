(function () {
  const inputCPF = document.querySelector("input");
  const button = document.querySelector("button");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const stringNumbers = inputCPF.value.replace(/\D+/g, "");
    inputCPF.value = checkCPF(stringNumbers);
  });

  document.addEventListener('keypress', e =>{
    if(e.keyCode === 13){
    const stringNumbers = inputCPF.value.replace(/\D+/g, "");
    inputCPF.value = checkCPF(stringNumbers);
    }
  })

  function checkCPF(stringNumbers) {
    if (stringNumbers === stringNumbers[0].repeat(stringNumbers.length)) {
      return "CPF inválido";
    }

    const arrayNumbers = convertToNum(stringNumbers);

    const digits = arrayNumbers.splice(-2, 2);

    const digitOne = returnDigit(arrayNumbers, 10);
    arrayNumbers.push(digitOne);

    const digitTwo = returnDigit(arrayNumbers, 11);

    const resultDigits = [digitOne, digitTwo];
    const display = checkDigit(digits, resultDigits);

    return display;
  }

  function returnDigit(set, counter) {
    const setOne = set.reduce((total, value) => {
      total += value * counter;
      counter--;
      return total;
    }, 0);

    const result = 11 - (setOne % 11);
    return result > 9 ? 0 : result;
  }

  function checkDigit(clientDigits, resultDigits) {
    return clientDigits.toString() === resultDigits.toString()
      ? "CPF válido"
      : "CPF inválido";
  }

  function convertToNum(stringNumbers) {
    const arrayStr = Array.from(stringNumbers);
    const arrayNum = arrayStr.map((value) => Number(value));
    return arrayNum;
  }
})();
