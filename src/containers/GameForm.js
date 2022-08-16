import React, { useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import "./GameForm.css";

// Images and Icons
import Error from "../images/icons/login/error.svg";
import Fingerprint from "../images/icons/login/fingerprint.svg";
import Question from "../images/icons/login/question.svg";

const GameForm = () => {
  const [textfield, setTextfield] = useState("");
  const [showError, setShowError] = useState(false);

  const changeHandler = (event) => {
    let input = event.target.value;
    setTextfield(() => input);
  };

  const toggleError = () => {
    alert(textfield);
    if (textfield.length !== 8 || textfield !== "12345678") {
      setShowError(true);
    }
    // alert(textfield);
  };

  return (
    <div className="container">
      <p className="heading">VIRTUAL ESCAPE</p>
      <p className="sub-heading">Enter your game code below to get started</p>
      <form className="form" action="">
        <TextInput
          label={"Game Code"}
          value={textfield}
          changeHandler={changeHandler}
          icon={{ img: Question, alt: "Hint" }}
          color={"transparent"}
          maxChar={"8"}
        />
        <Button
          value={"LOG IN"}
          icon={{ img: Fingerprint, alt: "Fingerprint" }}
          color={"red"}
          checkInput={toggleError}
        />
      </form>
      <div className={`error-msg error-msg-${showError}`}>
        <img className="error-img" src={Error} alt="error" />
        <p className="error-desc">Invalid game code provided</p>
      </div>
    </div>
  );
};

export default GameForm;
