let array = [2, -5, 10, -3, 7];

const sumOfAllPositiveNumbers = (array) => {
  let sum = 0;

  array.forEach((number) => (number > 0 ? (sum += number) : ""));

  console.log(sum);
};

sumOfAllPositiveNumbers(array);
