import React, { Component } from 'react';
const SpectatorMode = (props) => {
  return (
      <div
          className={`spectator-mode ${(props.topbarActiveTabUrl === 'spectator-mode' && props.selectedExpansionClass === 'goblins-vs-gnomes') && 'active'}-view`}>
        spectator mode
      </div>
  );
}

export default SpectatorMode;