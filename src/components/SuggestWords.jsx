import React, { useEffect } from 'react'

// style
import '../styles/SuggestWords.css'

const SuggestWords = ({ suggestions, pastSolutions }) => {

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
