import React, {Component} from 'react';
import {Link} from 'react-router';
import {icon_filters} from '../../../data/filters';
import Tooltip from 'antd/lib/tooltip';
import {removeQuery} from '../../../utils/utils-router';

export class IconFilter extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeQuery: ''
    }
  }

  queries(icon_url){
    return Object.assign({}, this.props.query, {[this.props.filter]: icon_url});
  };

  iconUrl(icon){
    switch(this.props.filter){
      case 'rarity': return `rarity`;
      case 'cost':   return `mana-${icon.url} mana`;
      default: return icon.url;
    }
  };

  listIcons(){
    return (
      icon_filters[this.props.filter].filter(icon => icon.isStandard === this.props.isStandard).map((icon, index) =>
        <li key={index} id={icon.url}>
          <Link className={`icon-tooltip-wrapper`} to={{pathname: 'cards', query: this.queries(icon.name)}}>
            <Tooltip title={icon.name} placement="bottom">
              <span id={`${this.props.filter}-set`} className={`hs-icon ${this.iconUrl(icon)} icon-${this.iconUrl(icon)} ${this.props.query[this.props.filter] === icon.name ? 'active' : ''}`}></span>
            </Tooltip>
          </Link>
        </li>
      ))
  };

  showHeader(){

    if(this.props.header === true && this.props.filter !== null) {

      let showBtn = this.props.query[this.props.filter] ? 'display-block' : 'display-none';
      return (
        <div className="icon-filter-wrapper">
          <h3>
            {this.props.header_label}
            <button onClick={() => removeQuery(this.props.filter)} className={`btn-pearl btn-padding-small ${showBtn}`}>
              {/*<Link className={`icon-tooltip-wrapper`} to={{pathname: 'cards', query: this.queries(icon.name)}}>x</Link>*/}
            x
              </button>
          </h3>
          <ul className={`${this.props.wrapper_class} ${this.props.filter}`}>
            {this.listIcons()}
          </ul>
        </div>
      )
    }

    else{
      return (
        <ul className={`${this.props.wrapper_class} ${this.props.filter}`}>
          {this.listIcons()}
        </ul>
      )
    }
  };

  render(){
    return this.showHeader();
  }
}

IconFilter.propTypes = {
  cards: React.PropTypes.array,
  header: React.PropTypes.bool,
  header_label: React.PropTypes.string,
  filter: React.PropTypes.string,
  isStandard: React.PropTypes.bool,
  query: React.PropTypes.object,
  wrapper_class: React.PropTypes.string,
};