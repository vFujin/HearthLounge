import React from 'react';

const Card = ({card}) => {
  const {img, name} = card;
  return (
    <li>
      <div className="img-wrapper"></div>
      <img src={img} alt={name}/>
    </li>
  )
};

export default Card;