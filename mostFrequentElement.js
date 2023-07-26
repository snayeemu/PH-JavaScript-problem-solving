let anArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

const mostFrequentElement = (anArray) => {
  let arrayToStr = anArray.join("");
  let saveOccurrence = {};

  for (let char of arrayToStr) {
    let numberOfOccurrence = arrayToStr.split(char).length - 1; 
    saveOccurrence[[char]] = numberOfOccurrence;
  }

  let maximumOccurrence = Math.max(...Object.values(saveOccurrence));

  let mostFrequentElement = Object.keys(saveOccurrence).find(
    (key) => saveOccurrence[key] === maximumOccurrence
  );

  console.log(mostFrequentElement);
};

mostFrequentElement(anArray);
