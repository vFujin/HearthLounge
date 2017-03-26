import React, {Component} from 'react';
import {Link} from 'react-router';
const tabmenu = ["hot", "new", "rising", "controversial", "top"];

export class RedditPostsSidebar extends Component{
  render() {
    return (
      <div className="sidebar__body">
        {tabmenu.map(el=>{
          return (
              <button key={el} id={el} onClick={(e) => this.props.handleTabmenuClick(e)} >
                <Link activeClassName="active" to={{pathname: 'reddit', query: {category: el}}}>{el}</Link>
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
