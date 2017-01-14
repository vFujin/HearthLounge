import React from 'react';
export const CreateDeck = () => {
  return (
      <div className="create-deck topbar-right">
        <span className="hs-icon icon-create-deck"></span>
        <div className="tooltip">
          <div className="caret-up"></div>
          <p>Zbuduj Talię</p>
        </div>
      </div>
  );
};

export default CreateDeck;