import React, { Component } from 'react';
export class SpectatorMode extends Component {
  render() {
    return (
        <div className={`spectator-mode ${(this.props.topbarActiveTabUrl === 'spectator-mode' && this.props.selectedExpansionClass === 'goblins-vs-gnomes') && 'active'}-view`}>
          spectator mode
        </div>
    );
  }
}