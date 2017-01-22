import React, { Component } from 'react';
import Select from 'react-select';
import {statistics} from '../../../data/filters';

export class StatisticsFilter extends Component {
  render() {
    return (
          <Select
              placeholder="Statystyki..."
              value={this.props.statistics}
              options={statistics}
              onChange={this.props.handleInputFilter.bind(this, 'statistics')}
              multi={true}
          />
    );
  }
}