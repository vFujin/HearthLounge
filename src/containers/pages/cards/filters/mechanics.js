import React, { Component } from 'react';
import Select from 'react-select';
import {mechanics} from '../../../../data/filters';

export class MechanicsFilter extends Component {
  render() {
    return (
        <Select
            placeholder="Mechaniki..."
            value={this.props.mechanics}
            options={mechanics}
            onChange={this.props.handleInputFilter.bind(this, 'mechanics')}
            multi={true}
        />
    );
  }
}