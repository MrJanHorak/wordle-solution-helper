const getSuggestions = async (
  words,
  mustNotContain,
  mustContain,
  atIndex,
  wrongIndex
) => {
  console.log("MUST NOT CONTAIN: ", mustNotContain);
  console.log("MUST CONTAIN: ", mustContain);
  console.log("AT INDEX: ", atIndex);
  console.log("WRONG INDEX: ", wrongIndex);

  for (let i=0;i<mustNotContain.length;i++){
    mustContain.includes(mustNotContain[i])
    if(mustContain.includes(mustNotContain[i])){
      let toRemove = mustNotContain.indexOf(mustNotContain[i])
      mustNotContain.splice(toRemove,1)
      i--
    }
  }

  let potentialWordsA = [];
  let potentialWordsB = [];
  let potentialWordsC = [];
  let potentialWordsD = [];

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

  if (mustContain.length > 0) {
    for (let w = 0; w < potentialWordsA.length; w++) {
      let wordArray = potentialWordsA[w].split("");
      if (mustContain.length > 0) {
        if (mustContain.every((letter) => wordArray.includes(letter))) {
          potentialWordsB.push(potentialWordsA[w]);
        }
      }
    }

    console.log("This many potential words found: ", potentialWordsB.length);
    console.log("PotentialwordsB: ", potentialWordsB);

    for (let k = 0; k < potentialWordsB.length; k++) {
      let wordArray = potentialWordsB[k].split("");
      let wordObject = {};
      let badIndex = false;
      for (let i = 0; i < wordArray.length; i++) {
        wordObject[i] = wordArray[i];
      }

      for (let indexNumber in wrongIndex) {
        if (wordObject[indexNumber] === wrongIndex[indexNumber]) {
          badIndex = true;
        }
      }
      if (badIndex === false) {
        potentialWordsC.push(potentialWordsB[k]);
      }
    }

    console.log("potential words C: ", potentialWordsC);

    if (Object.keys(atIndex).length !== 0) {
      for (let x = 0; x < potentialWordsC.length; x++) {
        let wordArray = potentialWordsC[x].split("");
        let wordObject = {};
        let allRightIndexes = [];

        for (let i = 0; i < wordArray.length; i++) {
          wordObject[i] = wordArray[i];
        }

        for (let indexNumber in atIndex) {
          if (wordObject[indexNumber] === atIndex[indexNumber]) {
            allRightIndexes.push("yep");
          }
        }

        if (allRightIndexes.length === Object.keys(atIndex).length) {
          potentialWordsD.push(potentialWordsC[x]);
        }
      }
    } else {
      potentialWordsD = potentialWordsC;
    }
  } else {
    potentialWordsD = potentialWordsA;
  }

  console.log("potential words D: ", potentialWordsD);

  return potentialWordsD;
};

export default getSuggestions;
