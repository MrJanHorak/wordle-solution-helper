import React, { useState, useEffect } from 'react'

//data
import pastWordles from '../data/pastWordles.json'

// style
import '../styles/SuggestWords.css'

const SuggestWords = ({ suggestions }) => {
  const [pastSolutions, setPastSolutions] = useState([])

  useEffect(() => {
    let pastWordleSolutions = []
    if (suggestions.length > 0) {
      for (let i = 0; i < suggestions.length; i++) {
        if (pastWordles[suggestions[i].toUpperCase()] === 1) {
          pastWordleSolutions.push(suggestions[i])
        }
      }
    }
    setPastSolutions(pastWordleSolutions)
  }, [suggestions])

  useEffect(() => {}, [pastSolutions])
  console.log(pastSolutions)
  const suggestedWords = suggestions.map((word, i) => {
    const originalWord = word.toUpperCase()
    word = originalWord.split('')
    return (
      <div className={`suggestion-row`} key={i}>
        {word.map((letter, index) => (
          <div
            className={`suggestion-square ${
              pastSolutions.includes(originalWord.toLowerCase())
                ? 'past-word'
                : ''
            }`}
            id={`${10 + index}`}
            key={index}
          >
            {letter}
          </div>
        ))}
      </div>
    )
  })

  return <div className="suggestion-container">{suggestedWords}</div>
}

export default SuggestWords
