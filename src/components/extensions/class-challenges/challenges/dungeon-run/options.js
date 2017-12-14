import React from 'react';
import OptionCards from "./option";
import Icon from "../../../../icon";

const Options = ({options}) => (
  <div className="container__classChallenges--content">
    {
      options.map(option => {
        const {label, icon, cards} = option;
        const optionCards = cards.map((card, i) => <OptionCards key={i} card={card}/>);

        return (
          <div className="container__classChallenges--content-option">
            <p>{label}</p>
            <ul>{optionCards}</ul>
            <div className="background">
              <Icon name={icon} />
            </div>
          </div>
        )
      })
    }
  </div>
);

export default Options;