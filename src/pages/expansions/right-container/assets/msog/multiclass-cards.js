import React, { Component } from 'react';
export class MulticlassCards extends Component {
  render() {
    return (
        <div className={`multiclass-cards ${(this.props.topbarActiveTabUrl === 'multiclass-cards' && this.props.selectedExpansionClass === 'mean-streets-of-gadgetzan') && 'active'}-view`}>
          multiclasstarg
        </div>
    );
  }
}