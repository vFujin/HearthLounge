import React, { Component } from 'react';
import Select from 'react-select';
import {faction} from '../../../data/card-filters';

export class FactionFilter extends Component {
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
            placeholder="Frakcja..."
            value={this.state.value}
            options={faction}
            onChange={this.handleChange}
            multi={true}
        />
    );
  }
}