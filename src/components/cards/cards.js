import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {lazyloadCards} from "./utils/lazyload";
import {mapCards} from "./utils/map-cards";
import Topbar from "./right-container/topbar";
import Sidebar from "./left-container/sidebar";
import {updateFilters} from "./utils/update-filters";

class ComponentCards extends Component {
  constructor(props){
    super(props);

    this.state = {
      loadedCards: 40,
      mode: props.mode || 'wild',
      filters: {}
    }
  }

  componentDidMount() {
    lazyloadCards('.content', loadedCards => this.setState({loadedCards}));
  }

  handleFilterClick = (e) =>{
    document.querySelector('.content').scrollTop = 0;
    const filter = e.currentTarget.dataset.filter;
    const value = _.startCase(e.currentTarget.id);
    const {filters} = this.state;

    updateFilters(state => this.setState(state), filters, filter, value);
  };

  render() {
    const {filters} = this.state;
    console.log(filters)
    return (
      <div className="container__page container__page--twoSided cards">
        <div className="container__page--inner  container__page--left">
          <h3 className="sidebar__header">Filters</h3>
          <Sidebar filters={filters} handleFilterClick={this.handleFilterClick} />
        </div>
        <div className="container__page--inner container__page--right">
          <Topbar filters={filters} handleFilterClick={this.handleFilterClick}/>
          <div className="content">
            <ul className="container__cards">
              {mapCards(this.props, this.state)}
            </ul>
          </div>

        </div>
      </div>
    )
  }

}

const mapStateToProps = state =>{
  const {info} = state;
  const {cards} = state.cards;
  return {cards, info};
};

export default connect(mapStateToProps, null)(ComponentCards);

ComponentCards.propTypes = {
  mode: PropTypes.string.isRequired
};