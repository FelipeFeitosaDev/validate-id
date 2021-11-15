// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
(function () {
  const inputCPF = document.querySelector("input");
  const button = document.querySelector("button");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    //pegar a string e remover tudo menos os numeros
    const stringNumbers = inputCPF.value.replace(/\D+/g, "");

    //verificar se o CPF é válido
    inputCPF.value = checkCPF(stringNumbers);
  });

  function checkCPF(stringNumbers) {

    if(stringNumbers === stringNumbers[0].repeat(stringNumbers.length)){
        return 'CPF inválido'
    }

    //transforma o array de strings em array de numbers
    const arrayNumbers = convertToNum(stringNumbers);
    //separa os digitos

    const digits = arrayNumbers.splice(-2, 2);

    //multiplica o arrayNumbers para criar o primeiro set
    const setOne = multiply(arrayNumbers, 10);

    // retorna o digito
    const digitOne = returnDigit(setOne);

    //acrescendo o digito para calcular o segundo conjunto
    arrayNumbers.push(digitOne);

    const setTwo = multiply(arrayNumbers, 11);
    const digitTwo = returnDigit(setTwo);

    const resultDigits = [digitOne, digitTwo];

    const display = checkDigit(digits, resultDigits);
    console.log(digits, resultDigits );
    return display;
  }

  function multiply(numbers, count) {
    const result = numbers.map((value) => {
      let result = value * count;
      count--;
      return result;
    });

    return result;
  }

  function returnDigit(set) {
    const setOne = set.reduce((total, value) => (total += value));
    const result = 11 - (setOne % 11);

    return result > 9 ? 0 : result

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
