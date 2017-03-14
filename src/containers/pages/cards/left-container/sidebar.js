import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {IsGoldenFilter} from '../../../shared-assets/filters/is-golden';
import IconFilter from '../../../shared-assets/filters/icon-filter';
import InputFilter from '../../../shared-assets/filters/input-filter';

export class Sidebar extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      value: []
    }
  }

  getOptions(input){
  return (
      fetch(`https://api.hearthstonejson.com/v1/17994/enUS/cards.collectible.json`)
          .then(r=>r.json())
          .then(data => {
            return {
              options: data.slice(1,10).map(x=> {
                return {
                  value: x.id,
                  label: x.name
                }
              })
            }
          })
  )
};

  handleInputChange(e){
    let value = e.target.value;
    console.log(value);
    this.setState({value})
  }



  render() {
    return (
        <div className="sidebar">
          <h3 className="filter-header">Filters</h3>

          <InputFilter data={this.getOptions.bind(this)}
                       statistics={this.props.statistics}
                       handleInputFilter={this.props.handleInputFilter}/>

          <IconFilter header={true} filter="expansions" query={this.props.query} tooltip={true} wrapper_class="sidebar-icons"/>
          <IconFilter header={true} filter="adventures" query={this.props.query} tooltip={true} wrapper_class="sidebar-icons"/>
          <IconFilter header={true} filter="rarity"     query={this.props.query} tooltip={true} wrapper_class="sidebar-icons"/>

          <IsGoldenFilter/>

        </div>
    );
  }
}