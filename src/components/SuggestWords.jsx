import React, { useEffect } from 'react'

// style
import '../styles/SuggestWords.css'

const SuggestWords = ({
  suggestions,
  pastSolutions,
  revealWords,
  hidePastWordles
}) => {
  useEffect(() => {}, [pastSolutions])
  const suggestedWords = suggestions.map((word, i) => {
    const originalWord = word.toUpperCase()
    word = originalWord.split('')
    return (
      <div
        className={`suggestion-row ${
          hidePastWordles && pastSolutions.includes(originalWord.toLowerCase())
            ? 'hide-word'
            : ''
        }`}
        key={i}
      >
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
            {revealWords
              ? letter
              : index === 0 || index === word.length - 1
              ? letter
              : '*'}
          </div>
        ))}
      </div>
    )
  })

  return <div className="suggestion-container">{suggestedWords}</div>
}

export default SuggestWords
