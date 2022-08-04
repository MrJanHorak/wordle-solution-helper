import React from 'react';

//assets
import sourceWords from "../data/words_dictionary.json";
import cleanWordList from "../js/cleanWordList";

const SuggestWords =({letters, highlighted})=>{

let mustContain = []
let atIndex = {}

highlighted.forEach((ele, index) => {
  if(ele!=="") mustContain.push(letters[index])
  if(ele[8]==='p') atIndex[index] = letters[index]
})


  return (
    <>
    here come suggested words!
    </>
  )
}

export default SuggestWords