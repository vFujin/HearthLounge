import React from 'react';
import PropTypes from 'prop-types';

const DeckstringInput = ({importedDeckstring, handleInputChange, handleDeckImport}) =>{
  return (
      <div className="deck-import">
        <input type="text" value={importedDeckstring} onChange={handleInputChange}/>
        <button onClick={handleDeckImport} id="deck-import" className="btn-pearl">Import</button>
      </div>
  )
};

DeckstringInput.propTypes = {
  handleDeckImport: PropTypes.func.isRequired
};

export default DeckstringInput;