import React from "react";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faTasks,
  faCheckCircle,
  faRedo
} from "@fortawesome/free-solid-svg-icons";

const ScreenStat = ({ text, activeIndex, match, resetExercise }) => {
  let typos = 0;
  for (let key in match) {
    if (!match[key]) {
      typos++;
    }
  }
  const accuracyPercentage = Math.floor(
    (100 * (text.length - typos)) / text.length
  );
  return (
    <div className="ScreenStat">
      <div>
        <FontAwesomeIcon
          style={typos > 0 ? { color: "red" } : { color: "purple" }}
          icon={faExclamationTriangle}
        />{" "}
        Mistakes: {typos}
      </div>
      <div>
        <FontAwesomeIcon style={{ color: "purple" }} icon={faTasks} /> Progress:{" "}
        {Math.round((100 * activeIndex) / text.length)}%
      </div>
      <div>
        <FontAwesomeIcon
          style={
            accuracyPercentage === 100
              ? { color: "green" }
              : { color: "purple" }
          }
          icon={faCheckCircle}
        />{" "}
        Accuracy: {accuracyPercentage}%
      </div>
      <div>
        {activeIndex > 0 && (
          <FontAwesomeIcon
            onClick={resetExercise}
            style={{ color: "purple", cursor: "pointer" }}
            icon={faRedo}
          />
        )}
        {activeIndex === 0 && (
          <FontAwesomeIcon style={{ color: "grey" }} icon={faRedo} />
        )}
      </div>
    </div>
  );
};

export default ScreenStat;
