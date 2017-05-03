import React from 'react';
import PropTypes from 'prop-types';
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
  children: PropTypes.element.isRequired
};

export default CreateDeck;