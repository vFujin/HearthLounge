import React, { Component } from 'react';
import Select from 'react-select';
import {archetype} from '../../../../../data/filters';

export class ArchetypeFilter extends Component {
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
            placeholder="Archetyp talii..."
            value={this.state.value}
            options={archetype}
            onChange={this.handleChange}
            multi={true}
        />
    );
  }
}