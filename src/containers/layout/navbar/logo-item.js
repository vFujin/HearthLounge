import React from 'react';
import LogoSVG from "../../../components/logo";
import {Link} from "react-router-dom";

const LogoItem = () => {
  return (
    <li className="nav__list--item logo">
      <Link to="/" className="logo-wrapper">
        <LogoSVG dotsColor="#00a99c"/>
        <div className="text-wrapper">
          <p>Hearth</p>
          <p>Lounge</p>
        </div>
      </Link>
    </li>
  )
};

export default LogoItem;
