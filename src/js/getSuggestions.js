const getSuggestions = async (words, mustNotContain,
  mustContain,
  atIndex) => {
  // let mustContain = [];
  // let mustNotContain = [];
  // let atIndex = {};
  let potentialWordsA = [];
  let potentialWordsB = [];
  let potentialWordsC = [];

  // highlighted.forEach((ele, index) => {
  //   if (ele !== "") mustContain.push(letters[index].toLowerCase());
  //   if (ele === "") mustNotContain.push(letters[index].toLowerCase());
  //   if (ele[8] === "p") atIndex[index] = letters[index].toLowerCase();
  // });

  console.log("Must Contain: ", mustContain);
  console.log("Must NOT Contain: ", mustNotContain);
  console.log("At Index: ", atIndex);

  for (let word in words) {
    let wordArray = word.split("");
    let compareArray = mustNotContain.filter((letter) =>
      wordArray.includes(letter)
    );

    if (compareArray.length === 0) {
      potentialWordsA.push(word);
    }
  }

  console.log("This many potential words found: ", potentialWordsA.length);
  console.log("potential words A: ", potentialWordsA);

  for (let w = 0; w < potentialWordsA.length; w++) {
    let wordArray = potentialWordsA[w].split("");
    if (mustContain.length > 0) {
      if (mustContain.every((letter) => wordArray.includes(letter))) {
        potentialWordsB.push(potentialWordsA[w]);
      }
    }
  }

  console.log("This many potential words found: ", potentialWordsB.length);
  console.log("potential words B: ", potentialWordsB);

  for (let x = 0; x < potentialWordsB.length; x++) {
    let wordArray = potentialWordsB[x].split("");
    let wordObject = {}
    for (let i = 0; i < wordArray.length; i++) {
      wordObject[i]=wordArray[i]
    }
    for (let indexNumber in atIndex){
      if(wordObject[indexNumber]===atIndex[indexNumber]){
        potentialWordsC.push(potentialWordsB[x])
      }
    }
  }

  console.log(
    "# of Potential words with letter atIndex: ",
    potentialWordsC.length
  );
  console.log("potential words C: ", potentialWordsC);

  return potentialWordsC;
};

export default getSuggestions;
