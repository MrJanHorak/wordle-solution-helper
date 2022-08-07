import React from "react";

//assets
// import sourceWords from "../data/words_dictionary.json";
// import cleanWordList from "../js/cleanWordList";

const SuggestWords = ({ letters, highlighted }) => {
  // let mustContain = [];
  // let mustNotContain = [];
  // let atIndex = {};
  // let potentialWordsA = [];
  // let potentialWordsB = [];
  // let potentialWordsC = [];

  // const findSuggestions = async () => {
  //   const cleanedList = await cleanWordList(sourceWords);

  //   highlighted.forEach((ele, index) => {
  //     if (ele !== "") mustContain.push(letters[index]);
  //     if (ele === "") mustNotContain.push(letters[index]);
  //     if (ele[8] === "p") atIndex[index] = letters[index];
  //   });

  //   console.log("Must Contain: ", mustContain);
  //   console.log("Must NOT Contain: ", mustNotContain);
  //   console.log("At Index: ", atIndex);

    
  //   for (let word in cleanedList) {
  //     let notContain = new Set (mustNotContain)
  //     let wordSet = new Set(word.split(""));
  //     let compareSet = new Set (
  //       [...wordSet].filter((letter) => !notContain.has(letter))
  //       );

  //     if (compareSet.size !== 0) {
  //       potentialWordsA.push(word);
  //     }
  //   }

  //   console.log("This many potential words found: ", potentialWordsA.length);
  //   console.log("potential words A: ", potentialWordsA);

  //   for (let word in potentialWordsA) {
  //     if (mustContain.length > 0) {
  //       if (mustContain.every((letter) => word.includes(letter))) {
  //         potentialWordsB.push(word);
  //       }
  //     }
  //   }

  //   console.log("This many potential words found: ", potentialWordsB.length);
  //   console.log("potential words B: ", potentialWordsB);

  //   for (let word in potentialWordsB) {
  //     for (let i = 0; i < word.length; i++) {
  //       if (word[i] === atIndex[i] || atIndex[i] === undefined) {
  //         potentialWordsC.push(word);
  //       }
  //     }
  //   }

  //   console.log(
  //     "# of Potential words with letter atIndex: ",
  //     potentialWordsC.length
  //   );
  //   console.log("potential words C: ", potentialWordsC);
  // };

  // findSuggestions();

  return <>here come suggested words!</>;
};

export default SuggestWords;
