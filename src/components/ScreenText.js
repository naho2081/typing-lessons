import React from "react";
import "../styles/App.css";

const ScreenText = ({ text, activeIndex, match }) => {
  return (
    <div className="ScreenText">
      <span className="ScreenText-previous">
        {text
          .split("")
          .map((char, index) => (
            <span
              className={
                match[index] ? "ScreenText-correct" : "ScreenText-wrong"
              }
              key={index}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))
          .filter(
            (char, index) => index < activeIndex && index > activeIndex - 15
          )}
      </span>
      <span className="ScreenText-active">{text[activeIndex]}</span>
      <span className="ScreenText-remaining">
        {text.split("").filter((char, index) => index > activeIndex)}
      </span>
    </div>
  );
};

export default ScreenText;
