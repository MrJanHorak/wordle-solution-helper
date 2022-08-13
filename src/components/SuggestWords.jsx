import React from "react";

// style
import "../styles/SuggestWords.css";

const SuggestWords = ({ suggestions }) => {
  const suggestedWords = suggestions.map((word, i) => {
    word = word.toUpperCase();
    word = word.split("");
    return (
      <div className="suggestion-row" key={i} draggable>
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
    );
  });

  return <div className="suggestion-container">{suggestedWords}</div>;
};

export default SuggestWords;
