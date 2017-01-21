import React, { Component } from 'react';
import Select from 'react-select';

export class NameFilter extends Component {


  render() {
    return (
        <Select
            placeholder="Nazwa..."
            value="1"
            options={["test"]}

            multi={true}
        />
    );
  }
}