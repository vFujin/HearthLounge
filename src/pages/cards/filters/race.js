import React, { Component } from 'react';
import Select from 'react-select';
import {race} from '../filters';

export class RaceFilter extends Component {
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
            placeholder="Rasa..."
            value={this.state.value}
            options={race}
            onChange={this.handleChange}
            multi={true}
        />
    );
  }
}