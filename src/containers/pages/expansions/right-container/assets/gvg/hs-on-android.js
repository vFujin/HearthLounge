import React, { Component } from 'react';
export class HearthstoneOnAndroid extends Component {
  render() {
    return (
        <div className={`hs-android ${(this.props.topbarActiveTabUrl === 'hs-android' && this.props.selectedExpansionClass === 'goblins-vs-gnomes') && 'active'}-view`}>
          hs android
        </div>
    );
  }
}