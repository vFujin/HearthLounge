import React from 'react';
import PropTypes from 'prop-types';
const CreateDeck = ({children, authenticated, activeUser, cards, patch}) =>{
    return React.cloneElement(children, {
      authenticated,
      user: activeUser,
      cards,
      patch
    });

};

CreateDeck.propTypes = {
  children: PropTypes.element.isRequired,
  authenticated: PropTypes.bool,
  activeUser: PropTypes.object,
  cards: PropTypes.array,
  patch: PropTypes.string
};

export default CreateDeck;