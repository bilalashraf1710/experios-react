import React from "react";
import "./Header.css";

// Images and Icons
import Experios from "../images/logos/experios.svg";
import VirtualEscape from "../images/logos/virtualescape.svg";
import Connection from "../images/icons/connection.svg";
import Exit from "../images/icons/exit.svg";
import Logout from "../images/icons/logout.svg";

const Header = (props) => {
  const { connected, status } = props;

  return (
    <header className="header">
      {/* Logos - Rightside */}
      <div className="flex logo">
        <img
          className="logo-img1"
          src={Experios}
          alt="Experios"
          width="137.79"
          height="35"
        />
        <img
          className="logo-img2"
          src={VirtualEscape}
          alt="Virtual Escape"
          width="99"
          height="38"
        />
      </div>

      {/* Actions - Leftside */}
      <div className="flex">
        <div className="flex action1">
          <img
            className="action-img img1"
            src={Connection}
            alt="online"
            width="22"
            height="16"
          />
          <p className="action-desc"> {connected} CONNECTED </p>
        </div>
        <div className="flex action2">
          <img
            className="action-img img2"
            src={status === "exit" ? Exit : Logout}
            alt="exit"
            width="21"
            height="18.38"
          />
          <p className="action-desc">
            {status === "exit" ? "EXIT GAME" : "LOG OUT"}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
