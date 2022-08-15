import React from "react";
import "./TextInput.css";

const TextInput = (props) => {
  const { value, icon, color, maxChar, codeInput } = props;
  return (
    <div className="text-container">
      <input
        id="tb"
        className={`text-box text-${color}`}
        type="text"
        required
        placeholder={value}
        maxLength={maxChar}
        onChange={codeInput}
      />
      <label for="tb" className="place-holder">
        {value}
      </label>
      <img
        className="text-icon"
        src={icon.img}
        alt={icon.alt}
        width="25"
        height="27"
      />
    </div>
  );
};

export default TextInput;
