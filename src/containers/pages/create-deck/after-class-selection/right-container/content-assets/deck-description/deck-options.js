import React from 'react';
import Input from '../../../../../../shared-assets/form-assets/input';
const DeckOptions = ({deck_title, handleInputchange, visible}) =>{
  return (
      <div className={!visible ? 'display-none' : 'save-deck-form'}>
       <form>
         <Input id="deck_title"
                type="text"
                placeholder="SMOrc huntard"
                handleInputChange={handleInputchange}
                value={deck_title}/>
       </form>
      </div>
  )
};

export default DeckOptions;