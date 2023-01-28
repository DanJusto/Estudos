const numberOne = Number(prompt("Digite um número:"))
const numberTwo = Number(prompt("Digite outro número:"))

let sum, subtraction, multiplication, division, restDivision, evenOdd, equals;

function evenOrOdd(sum) {
  if (sum % 2 == 0) {
    return "par"
  } else {
    return "ímpar"
  }
}

function equalsOrNot(n1, n2) {
  if (n1 == n2) {
    return "iguais"
  } else {
    return "diferentes"
  }
}

sum = numberOne + numberTwo
subtraction = numberOne - numberTwo
multiplication = numberOne * numberTwo
division = numberOne / numberTwo
restDivision = numberOne % numberTwo
evenOdd = evenOrOdd(sum)
equals = equalsOrNot(numberOne, numberTwo)

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${subtraction}`)
alert(`A multiplicação dos dois números é: ${multiplication}`)
alert(`A divisão dos dois números é: ${division}`)
alert(`O resto da divisão dos dois números é: ${restDivision}`)
alert(`A soma dos dois números é ${evenOdd}: ${sum}`)
alert(`Os números inseridos são ${equals}`)