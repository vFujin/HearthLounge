import React, { Component } from 'react';
import Select from 'react-select';
import {deck_type} from '../../../data/filters';

export class DeckType extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({value});
  }

  render() {
    return (
        <Select
            placeholder="Typ talii..."
            value={this.state.value}
            options={deck_type}
            onChange={this.handleChange}
            multi={true}
        />
    );
  }
}