const getSuggestions = async (words, letters, highlighted) => {

  let mustContain = [];
  let mustNotContain = [];
  let atIndex = {};
  let potentialWordsA = [];
  let potentialWordsB = [];
  let potentialWordsC = [];

  console.log("RECIEVED LETTERS: ", letters)
  console.log("RECIEVED HIGHLIGHTS", highlighted)
  console.log("RECIEVED WORDS", words)

  highlighted.forEach((ele, index) => {
    if (ele !== "") mustContain.push(letters[index]);
    if (ele === "") mustNotContain.push(letters[index]);
    if (ele[8] === "p") atIndex[index] = letters[index];
  });

  console.log("Must Contain: ", mustContain);
  console.log("Must NOT Contain: ", mustNotContain);
  console.log("At Index: ", atIndex);

  for (let word in words) {
    let wordSet = new Set(word.split(""));
    let compareSet = [...wordSet].filter((letter) => !mustNotContain.includes(letter))
  
    if (compareSet.size === 0) {
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
