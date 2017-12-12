import React from 'react';
import OptionCards from "./option";

const Options = ({options}) => (
  <div className="container__classChallenges--content">
    {
      options.map(option => {
        const {label, cards} = option;
        const optionCards = cards.map(card => <OptionCards key={card.dbfId} card={card}/>);

        return (
          <div className="container__classChallenges--content-option">
            <p>{label}</p>
            <ul>{optionCards}</ul>
          </div>
        )
      })
    }
  </div>
);

export default Options;