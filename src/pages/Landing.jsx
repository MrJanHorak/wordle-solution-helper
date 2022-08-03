import React, { useState } from "react";

// assets
import sourceWords from "../data/words_dictionary.json";
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

  const [activeRow, setActiveRow] = useState(0);
  let inputArray = [];

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
      inputArray = e.target.value.toUpperCase().split("");
      console.log(inputArray);
      setLetterArray({ ...letterArray, [activeRow]: inputArray });
      console.log(letterArray);
    }
  };

  return (
    <div className="solver-container">
      <div className="title">
        <h2>Wordle Solver</h2>
      </div>
      <div className="tip-suggestion-container">
        <div className="tips">tips over here</div>
        <div className="grid-container">
          <div
            className="row"
            id="row-one"
            onClick={activeRow === 0 ? handleClick : undefined}
          >
            <div className={`square ${squareClass[0][0]}`} id="00">
              <input
                type="text"
                name="0"
                maxLength={5}
                required
                autoComplete="off"
                onChange={activeRow === 0 ? handleChange : undefined}
                spellCheck="false"
              />
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
        </div>
        <div className="word-suggestions">suggestions here</div>
      </div>
    </div>
  );
};

export default Landing;
