import React from 'react';
import PropTypes from 'prop-types';
const CreateDeck = ({children, authenticated, activeUser, cards}) =>{
    return React.cloneElement(children, {
      authenticated,
      user: activeUser,
      cards,
    });
};

CreateDeck.propTypes = {
  children: PropTypes.element.isRequired,
  authenticated: PropTypes.bool,
  activeUser: PropTypes.object,
  cards: PropTypes.array
};

export default CreateDeck;