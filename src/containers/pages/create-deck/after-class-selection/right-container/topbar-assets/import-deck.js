import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../../components/buttons/button';

const DeckstringInput = ({importedDeckstring, handleInputChange, handleDeckImport}) =>{
  return (
      <div className="deck-import">
        <input id="deckstring-popover" placeholder="Paste deckstring here" type="text" value={importedDeckstring} onChange={handleInputChange}/>
        <Button text="Import" type="import" id="deck-import" handleClick={handleDeckImport} />
      </div>
  )
};

DeckstringInput.propTypes = {
  handleDeckImport: PropTypes.func.isRequired
};

export default DeckstringInput;