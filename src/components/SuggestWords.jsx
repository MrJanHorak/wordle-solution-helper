import React from 'react';

//assets
import sourceWords from "../data/words_dictionary.json";
import cleanWordList from "../js/cleanWordList";

const SuggestWords =({letters, highlighted})=>{

console.log("Recieved letters: ", letters)
console.log('Recieved highlights: ', highlighted)


  return (
    <>
    here come suggested words!
    </>
  )
}

export default SuggestWords