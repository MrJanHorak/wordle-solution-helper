// This is a helper function I wrote to clean up my
// words_dictionary.json file. This function cleans
// the word list of all words not allowed by Wordle
// Only 5 letter words are allowed

const cleanWordList = (wordList) => {

  for (let word in wordList) {
    if (word.length !== 5) {
      delete wordList[word];
    }
  }

  return wordList;

};

export default cleanWordList;
