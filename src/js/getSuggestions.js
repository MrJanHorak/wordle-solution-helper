const getSuggestions = async (words, letters, highlighted) => {
  let mustContain = [];
  let mustNotContain = [];
  let atIndex = {};
  let potentialWordsA = [];
  let potentialWordsB = [];
  let potentialWordsC = [];

  highlighted.forEach((ele, index) => {
    if (ele !== "") mustContain.push((letters[index].toLowerCase()));
    if (ele === "") mustNotContain.push((letters[index].toLowerCase()));
    if (ele[8] === "p") atIndex[index] = letters[index];
  });

  console.log("Must Contain: ", mustContain);
  console.log("Must NOT Contain: ", mustNotContain);
  console.log("At Index: ", atIndex);

  for (let word in words) {
    let wordArray = word.split("");
    let compareArray = mustNotContain.filter((letter) =>
      wordArray.includes(letter)
    );

    if(compareArray.length===0){
      potentialWordsA.push(word);
    }
  }

  console.log("This many potential words found: ", potentialWordsA.length);
  console.log("potential words A: ", potentialWordsA);

  for (let word in potentialWordsA) {
    if (mustContain.length > 0) {
      if (mustContain.every((letter) => word.includes(letter))) {
        potentialWordsB.push(word);
      }
    }
  }

  console.log("This many potential words found: ", potentialWordsB.length);
  console.log("potential words B: ", potentialWordsB);

  for (let word in potentialWordsB) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === atIndex[i] || atIndex[i] === undefined) {
        potentialWordsC.push(word);
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
