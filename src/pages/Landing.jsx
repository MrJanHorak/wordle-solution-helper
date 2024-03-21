import React, { useState } from "react";

// components
import SuggestWords from "../components/SuggestWords";
import InfoScreen from "../components/InfoScreen";

// data
import sourceWords from "../data/wordle-words.json";


//js
import getSuggestions from "../js/getSuggestions";

// style
import "../styles/Landing.css";

const Landing = () => {
  const [squareClass, setSquareClass] = useState({
    0: ["", "", "", "", ""],
    1: ["", "", "", "", ""],
    2: ["", "", "", "", ""],
    3: ["", "", "", "", ""],
    4: ["", "", "", "", ""],
    5: ["", "", "", "", ""],
  });

  const [letterArray, setLetterArray] = useState({
    0: [[], [], [], [], []],
    1: [[], [], [], [], []],
    2: [[], [], [], [], []],
    3: [[], [], [], [], []],
    4: [[], [], [], [], []],
    5: [[], [], [], [], []],
  });

  const [rowFull, setRowFull] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const [wrongIndex, setWrongIndex] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
  });

  const [activeRow, setActiveRow] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [message, setMessage] = useState("Enter your guess below.");
  const [mustNotContain, setMustNotContain] = useState([]);
  const [mustContain, setMustContain] = useState([]);

  let atIndex = {};
  let inputArray = [];
  let cleanedList = [];
  let potentialWords = [];

  const onlyLetters = (str) => {
    return /^[a-zA-Z]{1,5}$/.test(str);
  };

  const handleClick = (e) => {
    if (!isNaN(parseInt(e.target.id))) {
      let square = e.target.id.split("");
      let rowArray = squareClass[square[0]];
      rowArray[square[1]] === ""
        ? (rowArray[square[1]] = "correct-letter")
        : rowArray[square[1]] === "correct-letter"
        ? (rowArray[square[1]] = "correct-place")
        : (rowArray[square[1]] = "");
      setSquareClass({ ...squareClass, [square[0]]: rowArray });
    }
  };

  const handleChange = (e) => {
    if (onlyLetters(e.target.value)) {
      setMessage("Enter your guess below.");
      inputArray = e.target.value.toUpperCase().split("");
      if (inputArray.length === 5) {
        setRowFull({ ...rowFull, [activeRow]: true });
        setMessage("Click on letters Wordle has highlighted.");
      }
      setLetterArray({ ...letterArray, [activeRow]: inputArray });
    } else {
      inputArray = [[], [], [], [], []];
      setLetterArray({ ...letterArray, [activeRow]: inputArray });
      e.target.value = "";
      setMessage("Oops you entered a number!");
    }
  };

  const handleButton = (e) => {
    e.preventDefault();
    if (!rowFull[activeRow]) return;
    setMessage("Searching for possiblewords.");
    findSuggestions(letterArray[activeRow], squareClass[activeRow]);
    setActiveRow(activeRow + 1);

    if (activeRow === 5) setMessage("All rows are filled.");
    if (activeRow < 5) setMessage("Enter your next guess below.");
  };

  const findSuggestions = async (letters, priority) => {
    cleanedList = sourceWords;
    priority.forEach((ele, index) => {
      if (ele !== "" && !mustContain.includes(letters[index].toLowerCase()))
        mustContain.push(letters[index].toLowerCase());
      if (ele === "" && !mustNotContain.includes(letters[index].toLowerCase()))
        mustNotContain.push(letters[index].toLowerCase());
      if (ele[8] === "p") atIndex[index] = letters[index].toLowerCase();
      if (ele[8] === "l") wrongIndex[index].push(letters[index].toLowerCase());
    });

    potentialWords = await getSuggestions(
      cleanedList,
      mustNotContain,
      mustContain,
      atIndex,
      wrongIndex
    );

    setWrongIndex(wrongIndex);
    setSuggestions(potentialWords);
    setMustContain(mustContain);
    setMustNotContain(mustNotContain);
  };

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
            <div
              className="row"
              id="row-one"
              onClick={activeRow === 0 ? handleClick : undefined}
            >
              {activeRow === 0 && (
                <div
                  className={`letter-input ${
                    rowFull[0] ? "rowfull" : undefined
                  }`}
                >
                  <input
                    type="text"
                    name="0"
                    maxLength={5}
                    required
                    autoComplete="off"
                    onChange={activeRow === 0 ? handleChange : undefined}
                    spellCheck="false"
                    aria-label="input word"
                  />
                </div>
              )}
              <div className={`square ${squareClass[0][0]}`} id="00">
                {letterArray[0][0]}
              </div>
              <div className={`square ${squareClass[0][1]}`} id="01">
                {letterArray[0][1]}
              </div>
              <div className={`square ${squareClass[0][2]}`} id="02">
                {letterArray[0][2]}
              </div>
              <div className={`square ${squareClass[0][3]}`} id="03">
                {letterArray[0][3]}
              </div>
              <div className={`square ${squareClass[0][4]}`} id="04">
                {letterArray[0][4]}
              </div>
            </div>
            <div
              className="row"
              id="row-two"
              onClick={activeRow === 1 ? handleClick : undefined}
            >
              {activeRow === 1 && (
                <div
                  className={`letter-input ${
                    rowFull[1] ? "rowfull" : undefined
                  }`}
                >
                  <input
                    type="text"
                    name="0"
                    maxLength={5}
                    required
                    autoComplete="off"
                    onChange={activeRow === 1 ? handleChange : undefined}
                    spellCheck="false"
                  />
                </div>
              )}
              <div className={`square ${squareClass[1][0]}`} id="10">
                {letterArray[1][0]}
              </div>
              <div className={`square ${squareClass[1][1]}`} id="11">
                {letterArray[1][1]}
              </div>
              <div className={`square ${squareClass[1][2]}`} id="12">
                {letterArray[1][2]}
              </div>
              <div className={`square ${squareClass[1][3]}`} id="13">
                {letterArray[1][3]}
              </div>
              <div className={`square ${squareClass[1][4]}`} id="14">
                {letterArray[1][4]}
              </div>
            </div>
            <div
              className="row"
              id="row-three"
              onClick={activeRow === 2 ? handleClick : undefined}
            >
              {activeRow === 2 && (
                <div
                  className={`letter-input ${
                    rowFull[2] ? "rowfull" : undefined
                  }`}
                >
                  <input
                    type="text"
                    name="0"
                    maxLength={5}
                    required
                    autoComplete="off"
                    onChange={activeRow === 2 ? handleChange : undefined}
                    spellCheck="false"
                  />
                </div>
              )}
              <div className={`square ${squareClass[2][0]}`} id="20">
                {letterArray[2][0]}
              </div>
              <div className={`square ${squareClass[2][1]}`} id="21">
                {letterArray[2][1]}
              </div>
              <div className={`square ${squareClass[2][2]}`} id="22">
                {letterArray[2][2]}
              </div>
              <div className={`square ${squareClass[2][3]}`} id="23">
                {letterArray[2][3]}
              </div>
              <div className={`square ${squareClass[2][4]}`} id="24">
                {letterArray[2][4]}
              </div>
            </div>
            <div
              className="row"
              id="row-four"
              onClick={activeRow === 3 ? handleClick : undefined}
            >
              {activeRow === 3 && (
                <div
                  className={`letter-input ${
                    rowFull[3] ? "rowfull" : undefined
                  }`}
                >
                  <input
                    type="text"
                    name="0"
                    maxLength={5}
                    required
                    autoComplete="off"
                    onChange={activeRow === 3 ? handleChange : undefined}
                    spellCheck="false"
                  />
                </div>
              )}
              <div className={`square ${squareClass[3][0]}`} id="30">
                {letterArray[3][0]}
              </div>
              <div className={`square ${squareClass[3][1]}`} id="31">
                {letterArray[3][1]}
              </div>
              <div className={`square ${squareClass[3][2]}`} id="32">
                {letterArray[3][2]}
              </div>
              <div className={`square ${squareClass[3][3]}`} id="33">
                {letterArray[3][3]}
              </div>
              <div className={`square ${squareClass[3][4]}`} id="34">
                {letterArray[3][4]}
              </div>
            </div>
            <div
              className="row"
              id="row-five"
              onClick={activeRow === 4 ? handleClick : undefined}
            >
              {activeRow === 4 && (
                <div
                  className={`letter-input ${
                    rowFull[4] ? "rowfull" : undefined
                  }`}
                >
                  <input
                    type="text"
                    name="0"
                    maxLength={5}
                    required
                    autoComplete="off"
                    onChange={activeRow === 4 ? handleChange : undefined}
                    spellCheck="false"
                  />
                </div>
              )}
              <div className={`square ${squareClass[4][0]}`} id="40">
                {letterArray[4][0]}
              </div>
              <div className={`square ${squareClass[4][1]}`} id="41">
                {letterArray[4][1]}
              </div>
              <div className={`square ${squareClass[4][2]}`} id="42">
                {letterArray[4][2]}
              </div>
              <div className={`square ${squareClass[4][3]}`} id="43">
                {letterArray[4][3]}
              </div>
              <div className={`square ${squareClass[4][4]}`} id="44">
                {letterArray[4][4]}
              </div>
            </div>
            <div
              className="row"
              id="row-six"
              onClick={activeRow === 5 ? handleClick : undefined}
            >
              {activeRow === 5 && (
                <div
                  className={`letter-input ${
                    rowFull[5] ? "rowfull" : undefined
                  }`}
                >
                  <input
                    type="text"
                    name="0"
                    maxLength={5}
                    required
                    autoComplete="off"
                    onChange={activeRow === 5 ? handleChange : undefined}
                    spellCheck="false"
                  />
                </div>
              )}
              <div className={`square ${squareClass[5][0]}`} id="50">
                {letterArray[5][0]}
              </div>
              <div className={`square ${squareClass[5][1]}`} id="51">
                {letterArray[5][1]}
              </div>
              <div className={`square ${squareClass[5][2]}`} id="52">
                {letterArray[5][2]}
              </div>
              <div className={`square ${squareClass[5][3]}`} id="53">
                {letterArray[5][3]}
              </div>
              <div className={`square ${squareClass[5][4]}`} id="54">
                {letterArray[5][4]}
              </div>
            </div>
            <div className="input-button">
              <button onClick={handleButton} aria-label="look for words">
                Look for Words
              </button>
            </div>
          </form>
        </div>
        <div className="word-suggestions">
          {suggestions.length ? (
            <SuggestWords suggestions={suggestions} />
          ) : (
            <>
              <h3>Welcome to the Wordle helper!</h3>
              <ul>
                <li>choose a starter word and enter it on Wordle</li>
                <li>
                  enter the same starter word here and click on any letters that
                  wordle indicated in green or yellow.
                </li>
                <li>
                  one click turns a letter yellow and means correct letter at
                  wrong position.
                </li>
                <li>
                  a second click turns a letter green and means correct letter
                  and correct spot in target word.
                </li>
                <li>
                  to recieve suggestions click the button and browse through
                  suggestions.
                </li>
                <li>
                  greyed out words are words that have been used in previous Wordles
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
