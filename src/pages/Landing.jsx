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

  const handleClick = (e) => {
    console.log(e.target.id);
   if(!isNaN(parseInt(e.target.id))){
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

  return (
    <div className="solver-container">
      <div className="title">
        <h2>Wordle Solver</h2>
      </div>
      <div className="tip-suggestion-container">
        <div className="tips">tips over here</div>
        <div className="grid-container">
          <div className="row" id="row-one" onClick={handleClick}>
            <div className={`square ${squareClass[0][0]}`} id="00">
              W
            </div>
            <div className={`square ${squareClass[0][1]}`} id="01">
              O
            </div>
            <div className={`square ${squareClass[0][2]}`} id="02">
              R
            </div>
            <div className={`square ${squareClass[0][3]}`} id="03">
              D
            </div>
            <div className={`square ${squareClass[0][4]}`} id="04">
              L
            </div>
          </div>
          <div className="row" id="row-two" onClick={handleClick}>
            <div className={`square ${squareClass[1][0]}`} id="10"></div>
            <div className={`square ${squareClass[1][1]}`} id="11"></div>
            <div className={`square ${squareClass[1][2]}`} id="12"></div>
            <div className={`square ${squareClass[1][3]}`} id="13"></div>
            <div className={`square ${squareClass[1][4]}`} id="14"></div>
          </div>
          <div className="row" id="row-three" onClick={handleClick}>
            <div className={`square ${squareClass[2][0]}`} id="20"></div>
            <div className={`square ${squareClass[2][1]}`} id="21"></div>
            <div className={`square ${squareClass[2][2]}`} id="22"></div>
            <div className={`square ${squareClass[2][3]}`} id="23"></div>
            <div className={`square ${squareClass[2][4]}`} id="24"></div>
          </div>
          <div className="row" id="row-four" onClick={handleClick}>
            <div className={`square ${squareClass[3][0]}`} id="30"></div>
            <div className={`square ${squareClass[3][1]}`} id="31"></div>
            <div className={`square ${squareClass[3][2]}`} id="32"></div>
            <div className={`square ${squareClass[3][3]}`} id="33"></div>
            <div className={`square ${squareClass[3][4]}`} id="34"></div>
          </div>
          <div className="row" id="row-five" onClick={handleClick}>
            <div className={`square ${squareClass[4][0]}`} id="40"></div>
            <div className={`square ${squareClass[4][1]}`} id="41"></div>
            <div className={`square ${squareClass[4][2]}`} id="42"></div>
            <div className={`square ${squareClass[4][3]}`} id="43"></div>
            <div className={`square ${squareClass[4][4]}`} id="44"></div>
          </div>
          <div className="row" id="row-six" onClick={handleClick}>
            <div className={`square ${squareClass[5][0]}`} id="50"></div>
            <div className={`square ${squareClass[5][1]}`} id="51"></div>
            <div className={`square ${squareClass[5][2]}`} id="52"></div>
            <div className={`square ${squareClass[5][3]}`} id="53"></div>
            <div className={`square ${squareClass[5][4]}`} id="54"></div>
          </div>
        </div>
        <div className="word-suggestions">suggestions here</div>
      </div>
    </div>
  );
};

export default Landing;
