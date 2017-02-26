import React, {Component} from 'react';
export class Reddit extends Component{
  render(){
    return (
        <div className="pageContainer reddit">
          {this.props.children}
        </div>
    )
  }
}