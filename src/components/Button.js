import React from "react";
import "./Button.css";

const Button = (props) => {
  const { value, icon, color, checkInput } = props;
  return (
    <div className="btn-container">
      <button className={`btn btn-${color}`} onClick={checkInput}>
        {value}
        <img className="btn-img" src={icon.img} alt={icon.alt} />
      </button>
    </div>
  );
};

export default Button;
