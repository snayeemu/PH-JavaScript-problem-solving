const array = [97, 1002, 23, 83, 98, 49, 30];

const secondSmall = (array) => {
  let smalls = [array[0], array[1]];

  for (let number of array) smalls[0] > number ? (smalls[0] = number) : "";

  for (let number of array)
    smalls[1] > number && number > smalls[0] ? (smalls[1] = number) : "";

  console.log(smalls[1]);
};

secondSmall(array);
