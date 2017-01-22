import React, { Component } from 'react';
import Select from 'react-select';
import {dust} from '../../../data/filters';

export class DustFilter extends Component {
  render() {
    return (
        <Select
            placeholder="Tajemniczy Pył..."
            value={this.props.dust}
            options={dust}
            onChange={this.props.handleInputFilter.bind(this, 'dust')}
            multi={true}
        />
    );
  }
}