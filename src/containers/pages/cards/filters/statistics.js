import React, { Component } from 'react';
import Select from 'react-select';
import {statistics} from '../../../data/card-filters';

export class StatisticsFilter extends Component {
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
              placeholder="Statystyki..."
              value={this.state.value}
              options={statistics}
              onChange={this.handleChange}
              multi={true}
          />
    );
  }
}