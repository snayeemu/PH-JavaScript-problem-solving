let aString = "hello world";

const reverseStringWithoutUsingBuiltInReverseMethod = (aString) => {
  let reversed = "";

  for (let char of aString) reversed = char + reversed;

  console.log(reversed);
};

reverseStringWithoutUsingBuiltInReverseMethod(aString);
