import React, { useState } from "react";
import "./TextInput.css";

const TextInput = (props) => {
  const { value, icon, color, maxChar, changeHandler, label } = props;
  const [displayIcon, setDisplayIcon] = useState(false);

  const onChange = (event) => {
    changeHandler(event);
    console.log(value);
    if (event.target.value !== "") setDisplayIcon(true);
    else setDisplayIcon(false);
  };

  return (
    <div className="text-container">
      <input
        id="tb"
        value={value}
        className={`text-box text-${color}`}
        type="text"
        required
        maxLength={maxChar}
        onChange={onChange}
      />
      <label className="place-holder">{label}</label>
      <img
        className={`text-icon display-icon-${displayIcon}`}
        src={icon.img}
        alt={icon.alt}
        width="25"
        height="27"
      />
    </div>
  );
};

export default TextInput;
