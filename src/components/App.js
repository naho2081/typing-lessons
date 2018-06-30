import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import Screen from "./Screen";
// npm i react-confetti

class App extends Component {
  render() {
    const TEXT =
      "<p>Barton waited twenty years and always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded companions her nor advantages sufficient put. John on time down give meet help as of. Him waiting and correct believe now cottage she another. Vexed six shy yet along learn maids her tiled. Through studied shyness evening bed him winding present. Become excuse hardly on my thirty it wanted.</p>";

    return (
      <div className="App">
        <Header />
        <Screen text={TEXT} />
      </div>
    );
  }
}

export default App;
