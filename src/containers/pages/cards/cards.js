import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';
import Loader from '../../../components/loaders/loader';
import Tooltip from 'antd/lib/tooltip';
import {CardDetails} from './right-container/card-details';
import {infiniteScroll} from "../../../utils/infinite-scroll"
import {filterByUrl} from "../../../utils/filter/cards/by-url";
import {CARDS_LOADED} from "../../../redux/cards/types";
import _ from 'lodash';

class Cards extends PureComponent {
  componentWillUnmount(){
    this.props.updateCardsLoaded(37);
  }

  listCards = () => {
    const {cards, cardsLoaded, updateCardsLoaded, location} = this.props;
    const {loading} = cards;
    const {query} = location;

    if (loading) {
      return <Loader/>;
    } else {
      const {allCards} = cards;
      infiniteScroll('.content', updateCardsLoaded);
      return filterByUrl(allCards, query, cardsLoaded).map(card =>
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
  const {cards, cardsLoaded} = state.cards;
  return {cards, cardsLoaded};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCardsLoaded: payload => (dispatch({
      type: CARDS_LOADED, payload
    }))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards)