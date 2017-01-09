import React, { Component } from 'react';
export class HearthstoneOnAndroid extends Component {
  render() {
    return (
        <div className={`hs-on-android ${this.props.topbarActiveTabUrl === 'cards' && 'active'}-view`}>
          hs android
        </div>
    );
  }
}