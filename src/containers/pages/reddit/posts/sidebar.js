import React, {Component} from 'react';
import {Link} from 'react-router';
const tabmenu = ["hot", "new", "rising", "controversial", "top"];

export class RedditPostsSidebar extends Component{
  render() {
    return (
        <div>
          <h3 className="filter-header">Filters</h3>
          {tabmenu.map(el=>{
            return (
                <button key={el} onClick={(e) => this.props.handleTabmenuClick(e)} value={el}>
                  <Link to={`posts/${el}`}>{el}</Link>
                </button>
            )
          })}
        </div>
    )
  }
}


RedditPostsSidebar.propTypes = {
  handleTabmenuClick: React.PropTypes.func
};
