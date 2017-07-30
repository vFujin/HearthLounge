import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';
import Loader from '../../../components/loader';
import Tooltip from 'antd/lib/tooltip';
import {CardDetails} from './right-container/card-details';
import {infiniteScroll} from "../../../utils/infinite-scroll"
import {filterByUrl} from "../../../utils/filter/cards/by-url";
class Cards extends PureComponent {

  componentWillUnmount(){
    this.props.updateCurrentCardsLoaded(37);
  }

  listCards = () => {
    const {cards, currentCardsLoaded, updateCurrentCardsLoaded, location} = this.props;
    const {allCards} = cards;
    const {query} = location;

    if (allCards.length < 1) {
      return <Loader/>;
    } else {
      infiniteScroll('.content', updateCurrentCardsLoaded);
      return filterByUrl(allCards, query, currentCardsLoaded).map(card =>
          <li key={card.cardId}>
            <Tooltip placement="left" title={<CardDetails card={card}/>}>
              <div className="img-wrapper">
              <img src={card.img} alt={card.name}/>
              </div>
            </Tooltip>
          </li>
      )
    }
  };

  render() {
    const {cards, location} = this.props;
    const {query} = location;
    return (
        <div className="container__page container__page--twoSided cards">
          <div className="container__page--inner  container__page--left">
            <h3 className="sidebar__header">Filters</h3>
            <Sidebar cards={cards}
                     query={query}/>
          </div>
          <div className="container__page--inner container__page--right">
            <CardsTopbarFilters query={query}/>
            <div className="content">
              <ul className="container__cards">
                {this.listCards(query)}
              </ul>
            </div>

          </div>
        </div>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.object,
  location: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const {currentCardsLoaded} = state.cards;
  return {currentCardsLoaded};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentCardsLoaded: (currentCardsLoaded) => (dispatch({
      type: 'CURRENT_CARDS_LOADED', currentCardsLoaded
    }))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards)