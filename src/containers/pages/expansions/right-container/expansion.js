import React, {Component} from 'react';
import {Topbar} from './topbar';
export class Expansion extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div>
          {/*{this.props.expansion}*/}
          <Topbar expansion={this.props.location.pathname.slice(12)}/>
          x
        </div>
    )
  }
}