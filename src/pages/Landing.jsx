import React, { useState } from "react";

// assets
import sourceWords from "../data/words_dictionary.json";
import cleanWordList from "../js/cleanWordList";

// style
import "../styles/Landing.css";

const Landing = () => {
  const [squareClass, setSquareClass] = useState({
    0: ['', '', '', '', ''],
    1: ['', '', '', '', ''],
    2: ['', '', '', '', ''],
    3: ['', '', '', '', ''],
    4: ['', '', '', '', ''],
    5: ['', '', '', '', ''],
  });

  const handleClick = (e) => {
    let square = e.target.id.split('')
    let rowArray = squareClass[square[0]]
    rowArray[square[1]]===''?rowArray[square[1]]='correct-letter':
    rowArray[square[1]]==='correct-letter'?rowArray[square[1]]='correct-place':
    rowArray[square[1]]=''
    setSquareClass({...squareClass, [square[0]]:rowArray})

    console.log(squareClass)
  };

  return (
    <div className="solver-container">
      <div className="title">
        <h2>Wordle Solver</h2>
      </div>
      <div className="tip-suggestion-container">
        <div className="tips">tips over here</div>
        <div className="grid-container">
          <div className="row" id="row-one">
            <div className={`square ${squareClass[0][0]}`} id="00" onClick={handleClick}>
              W
            </div>
            <div
              className={`square ${squareClass[0][1]}`}
              id="01"
              onClick={handleClick}
            >
              O
            </div>
            <div className={`square ${squareClass[0][2]}`} id="02" onClick={handleClick}>
              R
            </div>
            <div className={`square ${squareClass[0][3]}`} id="03" onClick={handleClick}>
              D
            </div>
            <div className={`square ${squareClass[0][4]}`} id="04" onClick={handleClick}>
              L
            </div>
          </div>
          <div className="row" id="row-two">
            <div className={`square ${squareClass[1][0]}`} id="10" onClick={handleClick}></div>
            <div className={`square ${squareClass[1][1]}`} id="11" onClick={handleClick}></div>
            <div className={`square ${squareClass[1][2]}`} id="12" onClick={handleClick}></div>
            <div className={`square ${squareClass[1][3]}`} id="13" onClick={handleClick}></div>
            <div className={`square ${squareClass[1][4]}`} id="14" onClick={handleClick}></div>
          </div>
          <div className="row" id="row-three">
            <div className={`square ${squareClass[2][0]}`} id="20" onClick={handleClick}></div>
            <div className={`square ${squareClass[2][1]}`} id="21" onClick={handleClick}></div>
            <div className={`square ${squareClass[2][2]}`} id="22" onClick={handleClick}></div>
            <div className={`square ${squareClass[2][3]}`} id="23" onClick={handleClick}></div>
            <div className={`square ${squareClass[2][4]}`} id="24" onClick={handleClick}></div>
          </div>
          <div className="row" id="row-four">
            <div className={`square ${squareClass[3][0]}`} id="30" onClick={handleClick}></div>
            <div className={`square ${squareClass[3][1]}`} id="31" onClick={handleClick}></div>
            <div className={`square ${squareClass[3][2]}`} id="32" onClick={handleClick}></div>
            <div className={`square ${squareClass[3][3]}`} id="33" onClick={handleClick}></div>
            <div className={`square ${squareClass[3][4]}`} id="34" onClick={handleClick}></div>
          </div>
          <div className="row" id="row-five">
            <div className={`square ${squareClass[4][0]}`} id="40" onClick={handleClick}></div>
            <div className={`square ${squareClass[4][1]}`} id="41" onClick={handleClick}></div>
            <div className={`square ${squareClass[4][2]}`} id="42" onClick={handleClick}></div>
            <div className={`square ${squareClass[4][3]}`} id="43" onClick={handleClick}></div>
            <div className={`square ${squareClass[4][4]}`} id="44" onClick={handleClick}></div>
          </div>
          <div className="row" id="row-six">
            <div className={`square ${squareClass[5][0]}`} id="50" onClick={handleClick}></div>
            <div className={`square ${squareClass[5][1]}`} id="51" onClick={handleClick}></div>
            <div className={`square ${squareClass[5][2]}`} id="52" onClick={handleClick}></div>
            <div className={`square ${squareClass[5][3]}`} id="53" onClick={handleClick}></div>
            <div className={`square ${squareClass[5][4]}`} id="54" onClick={handleClick}></div>
          </div>
        </div>
        <div className="word-suggestions">suggestions here</div>
      </div>
    </div>
  );
};

export default Landing;
