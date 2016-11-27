import React, { Component } from 'react';
import Select from 'react-select';
import {dust} from '../filters';

export class DustFilter extends Component {
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
            placeholder="Tajemniczy Pył..."
            value={this.state.value}
            options={dust}
            onChange={this.handleChange}
            multi={true}
        />
    );
  }
}