import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';
import Loader from '../../../utils/loader';
import Tooltip from 'antd/lib/tooltip';
import {CardDetails} from './right-container/card-details';

class Cards extends PureComponent {

  componentWillUnmount(){
    this.props.updateCurrentCardsLoaded(37);
  }

  infiniteScroll = (updateCurrentCardsLoaded) => {
    const el = document.querySelector('.infinite');

    let end = 37;
    console.log(el);
    if (el) {

      el.addEventListener("scroll", _.throttle(function () {
        if (el.clientHeight === el.scrollHeight - el.scrollTop) {
          end += 37;
          updateCurrentCardsLoaded(end);
        }
      }, 1000));
    }
  };


  listCards = () => {
    if (this.props.cards.allCards.length < 1) {
      return <Loader/>;
    }


    else {
      this.infiniteScroll(this.props.updateCurrentCardsLoaded);
      return this.props.cards.allCards.slice(9, this.props.currentCardsLoaded || 37).map(card =>
          <li key={card.cardId}>
            <Tooltip placement="left" title={<CardDetails card={card}/>}>
              <img src={card.img} alt={card.name}/>
            </Tooltip>
          </li>
      )
    }
  };


  render() {
    return (
        <div className="container__page container__page--twoSided cards">
          <div className="container__page--inner  container__page--left">
            <h3 className="sidebar__header">Filters</h3>
            <Sidebar cards={this.props.cards}
                     query={this.props.location.query}/>
          </div>
          <div className="container__page--inner container__page--right">
            <CardsTopbarFilters query={this.props.location.query}/>
            <div className="content infinite">
              <ul className="container__cards">
                {this.listCards(this.props.location.query)}
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