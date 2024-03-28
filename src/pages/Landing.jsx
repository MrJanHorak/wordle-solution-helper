import React, { useState, useEffect, useCallback } from 'react'

// components
import SuggestWords from '../components/SuggestWords'
import InfoScreen from '../components/InfoScreen'

// data
import sourceWords from '../data/wordle-words.json'
import pastWordles from '../data/pastWordles.json'

//js
import getSuggestions from '../js/getSuggestions'

// style
import '../styles/Landing.css'

const Landing = () => {
  const [squareClass, setSquareClass] = useState({
    0: ['', '', '', '', ''],
    1: ['', '', '', '', ''],
    2: ['', '', '', '', ''],
    3: ['', '', '', '', ''],
    4: ['', '', '', '', ''],
    5: ['', '', '', '', '']
  })

  const [letterArray, setLetterArray] = useState({
    0: [[], [], [], [], []],
    1: [[], [], [], [], []],
    2: [[], [], [], [], []],
    3: [[], [], [], [], []],
    4: [[], [], [], [], []],
    5: [[], [], [], [], []]
  })

  const [rowFull, setRowFull] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  })

  const [wrongIndex, setWrongIndex] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: []
  })

  const [activeRow, setActiveRow] = useState(0)
  const [suggestions, setSuggestions] = useState([])
  const [message, setMessage] = useState('Enter your guess below.')
  const [mustNotContain, setMustNotContain] = useState([])
  const [mustContain, setMustContain] = useState([])
  const [pastSolutions, setPastSolutions] = useState([pastWordles])
  const [revealWords, setRevealWords] = useState(false)
  const [hidePastWordles, setHidePastWordles] = useState(false)
  const [pastNumber, setPastNumber] = useState(0)

  let atIndex = {}
  let inputArray = []
  let cleanedList = []
  let potentialWords = []

  useEffect(() => {
    fetch(
      'https://us-central1-wordlesolverbe.cloudfunctions.net/api/scrapeWords'
    )
      .then((response) => response.json())
      .then((data) => {
        setPastNumber(Object.keys(data).length)
        processPastWordles(data)
      })
      .catch((error) => {
        console.error('Error:', error)
        processPastWordles(pastWordles) // Use local data if fetch fails
      })
  }, [suggestions])

  const processPastWordles = (data) => {
    let pastWordleSolutions = []
    if (suggestions.length > 0) {
      for (let i = 0; i < suggestions.length; i++) {
        if (data[suggestions[i].toUpperCase()] === 1) {
          pastWordleSolutions.push(suggestions[i])
        }
      }
    }
    setPastSolutions(pastWordleSolutions)
  }

  const onlyLetters = (str) => {
    return /^[a-zA-Z]{1,5}$/.test(str)
  }

  const handleClick = useCallback((e) => {
    if (!isNaN(parseInt(e.target.id))) {
      let square = e.target.id.split('')
      setSquareClass((prevSquareClass) => {
        let rowArray = [...prevSquareClass[square[0]]]
        rowArray[square[1]] =
          rowArray[square[1]] === ''
            ? 'correct-letter'
            : rowArray[square[1]] === 'correct-letter'
            ? 'correct-place'
            : ''
        return { ...prevSquareClass, [square[0]]: rowArray }
      })
    }
  }, [])

  const handleChange = useCallback(
    (e) => {
      if (onlyLetters(e.target.value)) {
        setMessage('Enter your guess below.')
        inputArray = e.target.value.toUpperCase().split('')
        if (inputArray.length === 5) {
          setRowFull((prevRowFull) => ({ ...prevRowFull, [activeRow]: true }))
          setMessage('Click on letters Wordle has highlighted.')
        }
        setLetterArray((prevLetterArray) => ({
          ...prevLetterArray,
          [activeRow]: inputArray
        }))
      } else {
        inputArray = [[], [], [], [], []]
        setLetterArray((prevLetterArray) => ({
          ...prevLetterArray,
          [activeRow]: inputArray
        }))
        e.target.value = ''
        setMessage('Oops you entered a number!')
      }
    },
    [activeRow]
  )

  const handleButton = useCallback(
    (e) => {
      e.preventDefault()
      if (!rowFull[activeRow]) return
      setMessage('Searching for possiblewords.')
      findSuggestions(letterArray[activeRow], squareClass[activeRow])
      setActiveRow((prevActiveRow) => prevActiveRow + 1)

      if (activeRow === 5) setMessage('All rows are filled.')
      if (activeRow < 5) setMessage('Enter your next guess below.')
    },
    [activeRow, rowFull, letterArray, squareClass]
  )

  const findSuggestions = async (letters, priority) => {
    cleanedList = sourceWords
    priority.forEach((ele, index) => {
      if (ele !== '' && !mustContain.includes(letters[index].toLowerCase()))
        mustContain.push(letters[index].toLowerCase())
      if (ele === '' && !mustNotContain.includes(letters[index].toLowerCase()))
        mustNotContain.push(letters[index].toLowerCase())
      if (ele[8] === 'p') atIndex[index] = letters[index].toLowerCase()
      if (ele[8] === 'l') wrongIndex[index].push(letters[index].toLowerCase())
    })

    potentialWords = await getSuggestions(
      cleanedList,
      mustNotContain,
      mustContain,
      atIndex,
      wrongIndex
    )

    setWrongIndex(wrongIndex)
    setSuggestions(potentialWords)
    setMustContain(mustContain)
    setMustNotContain(mustNotContain)
  }

  const handleHidePastWordles = () => {
    setHidePastWordles(!hidePastWordles)
  }

  const handleRevealWords = () => {
    setRevealWords(!revealWords)
  }

  return (
    <div className="solver-container">
      <div className="title">
        <h1>Wordle Helper</h1>
      </div>
      <h2>{message}</h2>
      <div className="tip-suggestion-container">
        <div className="tips">
          <InfoScreen />
        </div>
        <div className="grid-container">
          <form>
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="row"
                id={`row-${i}`}
                onClick={activeRow === i ? handleClick : undefined}
              >
                {activeRow === i && (
                  <div
                    className={`letter-input ${
                      rowFull[i] ? 'rowfull' : undefined
                    }`}
                  >
                    <input
                      type="text"
                      name="0"
                      maxLength={5}
                      required
                      autoComplete="off"
                      onChange={activeRow === i ? handleChange : undefined}
                      spellCheck="false"
                      aria-label="input word"
                    />
                  </div>
                )}
                {Array.from({ length: 5 }, (_, j) => (
                  <div
                    className={`square ${squareClass[i][j]}`}
                    id={`${i}${j}`}
                    key={`${i}${j}`}
                  >
                    {letterArray[i][j]}
                  </div>
                ))}
              </div>
            ))}
            <div className="input-button">
              <button onClick={handleButton} aria-label="look for words">
                Look for Words
              </button>
            </div>
          </form>
        </div>
        <div className="word-suggestions">
          {suggestions.length ? (
            <>
              <p>
                Number of possible words:{' '}
                {hidePastWordles
                  ? suggestions.length - pastSolutions.length
                  : suggestions.length}
              </p>
              <div className="input-buttons">
                <button onClick={handleRevealWords} aria-label="reveal words">
                  {revealWords ? 'Conceal' : 'Reveal'}
                </button>
                <button
                  onClick={handleHidePastWordles}
                  aria-label="hide past Worldes"
                >
                  {hidePastWordles ? 'Show Past Wordles' : 'Hide Past Wordles'}
                </button>
              </div>
              <SuggestWords
                suggestions={suggestions}
                pastSolutions={pastSolutions}
                revealWords={revealWords}
                hidePastWordles={hidePastWordles}
              />
            </>
          ) : (
            <>
              <h3>Welcome to the Wordle helper!</h3>
              <ul>
                <li>choose a starter word and enter it on Wordle</li>
                <li>
                  enter the same starter word here and click on any letters that
                  wordle indicated in green or yellow.
                </li>
                <li>one click turns a letter yellow.</li>
                <li>a second click turns a letter green.</li>
                <li>
                  to receive suggestions click the button and browse through
                  suggestions.
                </li>
                <li>
                  greyed out words are words that have been used in previous{' '}
                  {pastNumber} Wordles
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Landing
