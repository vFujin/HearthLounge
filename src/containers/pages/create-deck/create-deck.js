import React from 'react';

const CreateDeck = props =>{
    return props.children;
};

CreateDeck.propTypes = {
  children: React.PropTypes.element
};

export default CreateDeck;