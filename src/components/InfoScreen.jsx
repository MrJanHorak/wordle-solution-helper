import React, { useState, useEffect } from 'react'

// data
import starterWords from '../data/starter-words'

// style
import '../styles/StarterWords.css'

const InfoScreen = () => {
  const [suggestedStarters, setSuggestedStarters] = useState([])

  useEffect(() => {
    const getSeveralRandomWords = () => {
      const shuffle = [...starterWords].sort(() => 0.5 - Math.random())
      return shuffle.slice(0, 3)
    }

    setSuggestedStarters(getSeveralRandomWords())
  }, [])

  const starters = suggestedStarters.map((word, i) => (
    <div className="starter-row" key={i}>
      <div className={`suggestion-square `} id="10">
        {word[0]}
      </div>
      <div className={`suggestion-square `} id="11">
        {word[1]}
      </div>
      <div className={`suggestion-square `} id="12">
        {word[2]}
      </div>
      <div className={`suggestion-square `} id="13">
        {word[3]}
      </div>
      <div className={`suggestion-square `} id="14">
        {word[4]}
      </div>
    </div>
  ))

  // const starter = starterWords[(Math.floor(Math.random() * (1 + starterWords.length-1 )) )];

  return (
    <div className="info-container">
      Have you tried any of the following starter words?
      {starters}
    </div>
  )
}

export default InfoScreen
