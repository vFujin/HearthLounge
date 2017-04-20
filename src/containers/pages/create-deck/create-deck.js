import React from 'react';

const CreateDeck = ({children, authed, user, name, cards, faction, mechanics, race, type, cardSet}) =>{
    return React.cloneElement(children, {
      authed,
      user,
      name,
      cards,
      faction,
      mechanics,
      race,
      type,
      cardSet
    });
};

CreateDeck.propTypes = {
  children: React.PropTypes.element
};

export default CreateDeck;