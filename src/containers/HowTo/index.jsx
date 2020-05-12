import React, { useState } from "react";
import "./App.css";
import MainImage from "./main.png";
import FirstText from "./firstText.js";
import SecondText from "./secondText.js";
import ThirdText from "./thirdText.js";
import FourthText from "./fourthText.js";
import { connect } from "react-redux";
import { changeSetupIndex } from '../../redux/actions/game'


const HowTo = (props) => {
  const [text1, setText1] = useState(<FirstText />);

  function clickOne() {
    setText1(<SecondText />);
  }

  function clickTwo() {
    setText1(<ThirdText />);
  }

  function clickThree() {
    setText1(<FourthText />);
  }

  function clickFour() {
    props.changeSetupIndex(1)
  }

  return (
    <div className="App">
      <div className="MainBox">
        <div className="HeaderBox">
          <img className="imageClass" src={MainImage} alt="main"></img>
          <div className="headerCentered">How To Play</div>
        </div>
        <button class="button button1" onClick={clickOne}>Game Setup</button>
        <button class="button button2" onClick={clickTwo}>Player Turns</button>
        <button class="button button3" onClick={clickThree}>Game Properties</button>
        <button class="button button4" onClick={clickFour}>Back to Menu</button>
        <div className = "helpTextBox">
          {text1}
        </div>
        <h4>By Watson Games</h4>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  changeSetupIndex
}

export default connect(null, mapDispatchToProps)(HowTo)