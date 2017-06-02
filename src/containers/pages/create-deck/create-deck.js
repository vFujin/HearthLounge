import React from 'react';
import PropTypes from 'prop-types';
const CreateDeck = ({children, authenticated, user, cards}) =>{
    return React.cloneElement(children, {
      authenticated,
      user,
      cards,
    });
};

CreateDeck.propTypes = {
  children: PropTypes.element.isRequired
};

export default CreateDeck;