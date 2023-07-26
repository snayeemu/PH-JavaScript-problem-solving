const array = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
let sumIsTargetValue = [];

for (let index1 = 0; index1 < array.length - 1; index1++) {
  for (let index2 = index1 + 1; index2 < array.length - 1; index2++) {
    const number1 = array[index1];
    const number2 = array[index2];

    if (number1 + number2 === targetValue) {
      sumIsTargetValue = [index1, index2];

      break;
    }
  }
}

console.log(sumIsTargetValue);
