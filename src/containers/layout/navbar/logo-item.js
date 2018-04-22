import React from 'react';
import LogoSVG from "../../../components/logo";

const LogoItem = () => {
  return (
    <li className="nav__list--item logo">
      <div className="logo-wrapper">
        <LogoSVG dotsColor="#00a99c"/>
        <div className="text-wrapper">
          <p>Hearth</p>
          <p>Lounge</p>
        </div>
      </div>
    </li>
  )
};

export default LogoItem;