import React, { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import "./Container.css";

// Images and Icons
import Error from "../images/icons/login/error.svg";
import Fingerprint from "../images/icons/login/fingerprint.svg";
import Question from "../images/icons/login/question.svg";

const Container = (props) => {
  const [textfield, setTextfield] = useState("");

  const codeInput = (event) => {
    let input = event.target.value;
    setTextfield(input);
  };

  const toggleError = (event) => {
    let input = document.querySelector(".text-box").value;
    debugger;
    if (input.length !== 8 || input !== "12345678") {
      document.querySelector(".error-msg").style.display = "flex";
    }
    alert(input);
  };

  return (
    <div className="container">
      <p className="heading">VIRTUAL ESCAPE</p>
      <p className="sub-heading">Enter your game code below to get started</p>
      <form className="form" action="">
        <TextInput
          value={"Game Code"}
          textfield={codeInput}
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
      <div className="error-msg">
        <img className="error-img" src={Error} alt="error" />
        <p className="error-desc">Invalid game code provided</p>
      </div>
    </div>
  );
};

export default Container;
