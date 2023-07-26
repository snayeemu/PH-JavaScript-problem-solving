//  (+, -, *, /)

const number1 = 5;
const number2 = 8;
const operand = "/";

const calculate = (number1, number2, operand) => {
  const output =
    operand === "+"
      ? number1 + number2
      : operand === "-"
      ? number1 - number2
      : operand === "/"
      ? number1 / number2
      : operand === "*"
      ? number1 * number2
      : "invalid operand";
  console.log(output);
};

calculate(number1, number2, operand);
