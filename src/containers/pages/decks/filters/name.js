import React, { Component } from 'react';
import Select from 'react-select';

export class NameFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return (
        <Select
            placeholder="Nazwa talii kart..."
            value={this.state.value}
            options=''
            onChange=''
            multi={true}
        />
    );
  }
}