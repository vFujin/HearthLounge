import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {lazyloadCards, mapCards, updateFilters } from "./utils";
import Topbar from "./right-container/topbar";
import Sidebar from "./left-container/sidebar";
import {mapInputCards} from './utils/map-cards';

class ComponentCards extends Component {
  constructor(props){
    super(props);

    this.state = {
      loadedCards: 40,
      mode: props.mode || 'wild',
      filters: {},
      cardNotFound: "Couldn't find cards that match your query"
    }
  }

  componentDidMount() {
    lazyloadCards('.content', loadedCards => this.setState({loadedCards}));
  }

  handleInputChange = (value, filter) => {
    document.querySelector('.content').scrollTop = 0;
    const {filters} = this.state;

    updateFilters(state => this.setState(state), filters, filter, value);
  };


  handleIconClick = (e) =>{
    document.querySelector('.content').scrollTop = 0;
    const filter = e.currentTarget.dataset.filter;
    const value = _.kebabCase(e.currentTarget.id);
    const {filters} = this.state;

    updateFilters(state => this.setState(state), filters, filter, value);
  };

  handleSliderClick = (value, filter) =>{
    document.querySelector('.content').scrollTop = 0;
    const {filters} = this.state;

    updateFilters(state => this.setState(state), filters, filter, value);
  };

  render() {
    const {filters} = this.state;
    const {info, cards} = this.props;

    return (
      <div className="container__page container__page--twoSided cards">
        <div className="container__page--inner  container__page--left">
          <h3 className="sidebar__header">Filters</h3>
          <Sidebar filters={filters}
                   info={info}
                   cards={mapInputCards(this.props, this.state)}
                   allCards={cards}
                   handleInputChange={this.handleInputChange}
                   handleSliderClick={this.handleSliderClick}
                   handleIconClick={this.handleIconClick} />
        </div>
        <div className="container__page--inner container__page--right">
          <Topbar filters={filters} handleIconClick={this.handleIconClick}/>
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
  mode: PropTypes.string
};