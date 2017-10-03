import React from 'react';

const LogoSVG = () =>{
  return (
      <svg width="100" height="100" id="logo" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle className="circle2" cx="2.5%" cy="25%" r="2.5%" fill="#00c99a"/>
          <circle className="circle1" cx="2.5%" cy="45%" r="2.5%" fill="#00c99a"/>
          <circle className="circle" cx="2.5%" cy="65%" r="2.5%" fill="#00c99a"/>
          {/*col-2*/}
          <circle className="circle" cx="20%" cy="14%" r="2.5%" fill="#00c99a"/>
          <circle className="circle1" cx="20%" cy="35%" r="2.5%" fill="#00c99a"/>
          <circle className="circle" cx="20%" cy="55%" r="2.5%" fill="#00c99a"/>
          <circle className="circle2" cx="20%" cy="76%" r="2.5%" fill="#00c99a"/>
          {/*col-3*/}
          <circle className="circle" cx="37.5%" cy="5%" r="2.5%" fill="#00c99a"/>
          <circle className="circle1" cx="37.5%" cy="25%" r="2.5%" fill="#00c99a"/>
          <circle className="circle" cx="37.5%" cy="45%" r="2.5%" fill="#00c99a"/>
          <circle className="circle2" cx="37.5%" cy="65%" r="2.5%" fill="#00c99a"/>
          <circle className="circle" cx="37.5%" cy="85%" r="2.5%" fill="#00c99a"/>
          {/*col-4*/}
          <circle className="circle" cx="55%" cy="14%" r="2.5%" fill="#00c99a"/>
          <circle className="circle1" cx="55%" cy="35%" r="2.5%" fill="#00c99a"/>
          <circle className="circle2" cx="55%" cy="55%" r="2.5%" fill="#00c99a"/>
          <circle className="circle" cx="55%" cy="76%" r="2.5%" fill="#00c99a"/>
          {/*col-5*/}
          <circle className="circle1" cx="72.5%" cy="25%" r="2.5%" fill="#00c99a"/>
          <circle className="circle" cx="72.5%" cy="45%" r="2.5%" fill="#00c99a"/>
          <circle className="circle2" cx="72.5%" cy="65%" r="2.5%" fill="#00c99a"/>
        </g>
        {/*lines | starting from center*/}
        <path className="line" d="M 37.5 45 L 20 55 L 20 35 L 37.5 25  L 55 35 L 55 55 L 37.5 65"
              stroke="#00c99a"
              fill="rgba(0,0,0,0)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"/>
      </svg>

  )
};

export default LogoSVG;