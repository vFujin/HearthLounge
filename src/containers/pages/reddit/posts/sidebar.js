import React, {Component} from 'react';
export class RedditPostsSidebar extends Component{
  render() {
    return (
        <div>
          <h3 className="filter-header">Filters</h3>
          <button onClick={this.props.handleTabmenuClick(this)} value="hot">Hot</button>
          <button value="new">New</button>
          <button value="rising">Rising</button>
          <button value="controversial">Controversial</button>
          <button value="top">Top</button>
        </div>
    )
  }
}


RedditPostsSidebar.propTypes = {
  handleTabmenuClick: React.PropTypes.func
};
