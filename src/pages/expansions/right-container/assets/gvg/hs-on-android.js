import React, { Component } from 'react';
export class HearthstoneOnAndroid extends Component {
  render() {
    return (
        <div className={`hs-android ${this.props.topbarActiveTabUrl === 'hs-android' && 'active'}-view`}>
          hs android
        </div>
    );
  }
}