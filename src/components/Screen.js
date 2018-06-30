import React, { Component } from "react";
import ScreenText from "./ScreenText";
import ScreenStat from "./ScreenStat";
import Progress from "./Progress";
import "../styles/App.css";
import keycode from "keycode";

class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      match: {}
    };

    this.resetExercise = this.resetExercise.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  resetExercise() {
    this.setState(prevState => ({ activeIndex: 0, match: {} }));
  }

  changeActiveCharInc(key) {
    this.setState(prevState => {
      let { text } = this.props;
      let { activeIndex, match } = prevState;
      if (keycode(key) !== 8) {
        key === text[activeIndex]
          ? (match[activeIndex] = true)
          : (match[activeIndex] = false);

        activeIndex++;
      }

      return { activeIndex, match };
    });
  }

  changeActiveCharDec() {
    this.setState(prevState => {
      let { activeIndex, match } = prevState;
      if (activeIndex > 0) {
        delete match[activeIndex - 1];
        activeIndex--;
      }
      return { activeIndex, match };
    });
  }

  keyPress(e) {
    e.preventDefault();
    this.changeActiveCharInc(e.key);
  }

  keyDown(e) {
    if (e.keyCode === 8) {
      e.preventDefault();
      this.changeActiveCharDec(e.key);
    }
  }

  componentDidMount() {
    document.addEventListener("keypress", this.keyPress);
    document.addEventListener("keydown", this.keyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.keyPress);
    document.removeEventListener("keydown", this.keyDown);
  }
  render() {
    return (
      <div>
        <div className="Screen">
          <div className="Screen-frame">
            <div className="Screen-frameInner">
              <ScreenText
                text={this.props.text}
                activeIndex={this.state.activeIndex}
                match={this.state.match}
              />
              <Progress
                progress={Math.round(
                  (100 * this.state.activeIndex) / this.props.text.length
                )}
              />
              <ScreenStat
                text={this.props.text}
                activeIndex={this.state.activeIndex}
                match={this.state.match}
                resetExercise={this.resetExercise}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
