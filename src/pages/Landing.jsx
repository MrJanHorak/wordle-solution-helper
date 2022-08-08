import React, { useEffect, useState } from "react";

// components
import SuggestWords from "../components/SuggestWords";

// data
import sourceWords from "../data/words_dictionary.json";

//js
import getSuggestions from "../js/getSuggestions";
import cleanWordList from "../js/cleanWordList";

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

  const [activeRow, setActiveRow] = useState(0);
  const [searchLetters, setSearchLetters] = useState([]);
  const [searchPriority, setSearchPriority] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [message, setMessage] = useState("enter letters below");
  const [recievedWords, setRecievedWords] = useState(false);
  const [mustNotContain, setMustNotContain] = useState([]);
  let inputArray = [];
  let cleanedList = [];
  let potentialWords = [];
  let mustContain = [];
  // let mustNotContain = [];
  let atIndex = {};
  let wrongIndex = {};

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
      setMessage("enter letters below");
      inputArray = e.target.value.toUpperCase().split("");
      if (inputArray.length === 5) {
        setRowFull({ ...rowFull, [activeRow]: true });
        setMessage("now select letters");
      }
      setLetterArray({ ...letterArray, [activeRow]: inputArray });
    } else {
      inputArray = [[], [], [], [], []];
      setLetterArray({ ...letterArray, [activeRow]: inputArray });
      e.target.value = "";
      setMessage("oops you entered a number!");
    }
  };

  const handleButton = (e) => {
    e.preventDefault();
    if (!rowFull[activeRow]) return;
    setSearchLetters(letterArray[activeRow]);
    setSearchPriority(squareClass[activeRow]);
    setMessage("searching words");
    setRecievedWords(false);
    findSuggestions(letterArray[activeRow], squareClass[activeRow]);
    setActiveRow(activeRow + 1);

    if (activeRow === 5) setMessage("All rows are filled");
    if (activeRow < 5) setMessage("enter letters below");
  };

  const findSuggestions = async (letters, priority) => {
    cleanedList = await cleanWordList(sourceWords);
    priority.forEach((ele, index) => {
      if (ele !== "") mustContain.push(letters[index].toLowerCase());
      if (ele === "") mustNotContain.push(letters[index].toLowerCase());
      if (ele[8] === "p") atIndex[index] = letters[index].toLowerCase();
      if (ele[8] === "l") wrongIndex[index] = letters[index].toLowerCase();
    });

    potentialWords = await getSuggestions(
      cleanedList,
      mustNotContain,
      mustContain,
      atIndex,
      wrongIndex
    );
    setSuggestions(potentialWords);
    setRecievedWords(true);
  };

  useEffect(() => {
    const suggestedWords = () => {
      if (recievedWords) {
        setMessage("Suggestion found!");
        return <SuggestWords potentialWords={potentialWords} />;
      }
    };
    setSuggestions(suggestedWords());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recievedWords]);

  return (
    <div className="solver-container">
      <div className="title">
        <h2>Wordle Solver</h2>
      </div>
      <h5>{message}</h5>
      <div className="tip-suggestion-container">
        <div className="tips">tips over here</div>
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
              <button onClick={handleButton}>Look for Words</button>
            </div>
          </form>
        </div>
        <div className="word-suggestions">
          <SuggestWords />
        </div>
      </div>
    </div>
  );
};

export default Landing;
