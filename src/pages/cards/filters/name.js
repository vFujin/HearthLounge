import React, { Component } from 'react';
import Select from 'react-select';
import unirest from 'unirest';
import {race} from '../../../data/cards.filters'

export class NameFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  handleChange(value) {
    this.setState({value});
  }

  componentDidMount() {
    console.log('mounted');
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {
            return {value: res.body['Basic']}

        });
  }

  render() {
    return (
        <Select
            placeholder="Nazwa..."
            value={this.state.value}
            options={this.componentDidMount()}
            onChange={this.componentDidMount()}
            multi={true}
        />
    );
  }
}