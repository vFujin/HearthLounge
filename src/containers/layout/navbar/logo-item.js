import React from 'react';
import LogoSVG from "../../../components/logo";
import {Link} from "react-router-dom";

const LogoItem = () => {
  const alphaStyles = {
    opacity: .4,
    color: "grey",
    position: "absolute",
  };
  console.log("foo");


  return (
    <li className="nav__list--item logo">
      <Link to="/" className="logo-wrapper">
        <LogoSVG dotsColor="#00a99c"/>
        <div className="text-wrapper">
          <p>Hearth</p>
          <p>Lounge</p>
        </div>
        <span className="alpha" style={alphaStyles}>ALPHA</span>
      </Link>
    </li>
  )
};

export default LogoItem;
