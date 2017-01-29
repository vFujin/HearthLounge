import React, { Component } from 'react';
import Select from 'react-select';
import {race} from '../../../../data/filters';

export class RaceFilter extends Component {
  render() {
    return (
        <Select
            placeholder="Rasa..."
            value={this.props.race}
            options={race}
            onChange={this.props.handleInputFilter.bind(this, 'race')}
            multi={true}
        />
    );
  }
}