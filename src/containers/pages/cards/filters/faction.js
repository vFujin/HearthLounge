import React, { Component } from 'react';
import Select from 'react-select';
import {faction} from '../../../../data/filters';

export class FactionFilter extends Component {
  render() {
    return (
        <Select
            placeholder="Frakcja..."
            value={this.props.faction}
            options={faction}
            onChange={this.props.handleInputFilter.bind(this, 'faction')}
            multi={true}
        />
    );
  }
}