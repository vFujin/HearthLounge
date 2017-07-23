import React from 'react';

const Card = ({cards}) =>{
    return (
        <ul className="cards-container">
          {cards.map((card, i)=>
              <li key={i}>
                <div className="img-wrapper">
                  <img src={card.img} alt={`${card.name}`}/>
                </div>
              </li>
          )}
        </ul>
    );
};

export default Card;