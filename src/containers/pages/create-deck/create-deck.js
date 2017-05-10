import React from 'react';
import PropTypes from 'prop-types';
const CreateDeck = ({children, authed, user, cards}) =>{
    return React.cloneElement(children, {
      authed,
      user,
      cards,
    });
};

CreateDeck.propTypes = {
  children: PropTypes.element.isRequired
};

export default CreateDeck;