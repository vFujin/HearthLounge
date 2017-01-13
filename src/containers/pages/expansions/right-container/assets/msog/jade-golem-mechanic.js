import React, { Component } from 'react';
export class JadeGolemMechanic extends Component {
  render() {
    return (
        <div className={`jade-golem-mechanic ${(this.props.topbarActiveTabUrl === 'jade-golem-mechanic' && this.props.selectedExpansionClass === 'mean-streets-of-gadgetzan') && 'active'}-view`}>
          jade golem
        </div>
    );
  }
}