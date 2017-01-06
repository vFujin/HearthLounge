import React, { Component } from 'react';
import { Link } from 'react-router';
import { topbar_tabs } from '../../data/adventure-details';
export class Topbar extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: this.props.isActive,
      isActive: null
    }
  }

  handleClick(i){
    let isActive = this.state.isActive === i ? null : i;

    this.setState({
      isActive: isActive
    });
  }
  render() {
    return (
        <div className={`topbar ${this.props.selectedAdventureUrl}`}>
          <ul className="adventure-content-navigation">
            {topbar_tabs.map( (element, index) =>
              <li onClick={this.handleClick.bind(this, index)} key={index} className={this.props.isActive}>
                <Link to={`/przygody/${this.props.selectedAdventureUrl}/${element.url}`}>
                  {element.tab}
                </Link>
              </li>
            )}
          </ul>
        </div>
    );
  }
}