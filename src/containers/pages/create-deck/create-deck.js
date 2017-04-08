import React from 'react';

const CreateDeck = ({children}) =>{
    return children;
};

CreateDeck.propTypes = {
  children: React.PropTypes.element
};

export default CreateDeck;