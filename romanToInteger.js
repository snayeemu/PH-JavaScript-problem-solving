const roman = "ixx";

const romanToInteger = (roman) => {
  const romanToIntegerMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integer = 0;

  for (let i = 0; i < roman.length; i++) {
    let currentChar = roman[i].toUpperCase();
    let nextChar = i !== roman.length - 1 ? roman[i + 1].toUpperCase() : 0;
    console.log(currentChar, nextChar);
    if (romanToIntegerMap[currentChar] < romanToIntegerMap[nextChar]) {
      integer += romanToIntegerMap[nextChar] - romanToIntegerMap[currentChar];
      i++;
    } else integer += romanToIntegerMap[currentChar];
    console.log(integer);
  }

  console.log(integer);
};

romanToInteger(roman);
