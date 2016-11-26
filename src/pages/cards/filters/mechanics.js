import React, { Component } from 'react';
import Select from 'react-select';
import {mechanics} from '../filters';

export class MechanicsFilter extends Component {
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
            value={this.state.value}
            options={mechanics}
            onChange={this.handleChange}
            multi={true}
        />
    );
  }
}