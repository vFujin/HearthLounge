import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';
import Loader from '../../../components/loader';
import Tooltip from 'antd/lib/tooltip';
import {CardDetails} from './right-container/card-details';

class Cards extends PureComponent {

  componentWillUnmount(){
    this.props.updateCurrentCardsLoaded(37);
  }

  infiniteScroll = (updateCurrentCardsLoaded) => {
    const el = document.querySelector('.content');

    let end = 35;
    console.log(el);
    if (el) {
      el.addEventListener("scroll", _.throttle(function () {
        if (el.clientHeight === el.scrollHeight - el.scrollTop) {
          end += 35;
          updateCurrentCardsLoaded(end);
        }
      }, 1000));
    }
  };

  listCards = () => {
    const {cards, currentCardsLoaded, updateCurrentCardsLoaded, location} = this.props;
    const {allCards} = cards;
    const {query} = location;

    if (allCards.length < 1) {
      return <Loader/>;
    } else {
      this.infiniteScroll(updateCurrentCardsLoaded);
      return allCards.filter(function (card) {
        return Object.keys(query).every(function (queryKey) {
          // if (queryKey === 'mechanics') {
          //   console.log(queryKey);
          //   return query[queryKey].some(queryValue => {
          //     console.log(queryValue, card[queryKey].indexOf(queryValue) > -1);
          //     return card[queryKey].indexOf(queryValue) > -1;
          //   });
          // }
          if (query[queryKey].constructor === Array) {
            return query[queryKey].some(queryValue => {

              return card[queryKey] == queryValue
            });
          }
          else {
            return card[queryKey] == query[queryKey];
          }
        })
      }).slice(0, currentCardsLoaded || 35).map(card =>
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