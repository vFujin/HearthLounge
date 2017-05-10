import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';
import Loader from '../../../utils/loader';
import Tooltip from 'antd/lib/tooltip';
import {CardDetails} from './right-container/card-details';
import LazyLoad from 'react-lazyload';


const Cards = ({cards, location}) => {
  const {allCards, name, race, mechanics, type, faction, cardSet} = cards;
  const {query} = location;

  const handleCardClick = (e, card) => {
    // let target = e.target;
    console.log(card);
  };

  const listCards = (query) => {
    if (allCards.length < 1) {
      return <Loader/>;
    }

    else {
      return (
          allCards.filter(function (card) {
            return Object.keys(query).every(function (queryKey) {
              // if (queryKey === 'mechanics') {
              //   console.log(queryKey);
              //   return query[queryKey].some(queryValue => {
              //     console.log(queryValue, card[queryKey].indexOf(queryValue) > -1);
              //     return card[queryKey].indexOf(queryValue) > -1;
              //   });
              // }
              if (queryKey === 'health') {

              } else if (query[queryKey].constructor === Array) {
                return query[queryKey].some(queryValue => {

                  return card[queryKey] == queryValue
                });
              }
              else {
                return card[queryKey] == query[queryKey];
              }
            })
          })
              .map(card =>
                  <li key={card.cardId} onClick={(e) => handleCardClick(e, card)}>
                    <LazyLoad height={250} overflow>
                      <Tooltip placement="left" title={<CardDetails card={card}/>}>
                        <img src={card.img} alt={card.name}/>
                      </Tooltip>
                    </LazyLoad>
                  </li>
              )
      )
    }
  };

  return (
      <div className="container__page container__page--twoSided cards">
        <div className="container__page--inner  container__page--left">
          <h3 className="sidebar__header">Filters</h3>
          <Sidebar name={name}
                   race={race}
                   mechanics={mechanics}
                   type={type}
                   faction={faction}
                   cards={allCards}
                   cardSet={cardSet}
                   query={query}/>
        </div>
        <div className="container__page--inner container__page--right">
          <CardsTopbarFilters query={query}/>
          <div className="content">
            <ul className="container__cards">
              {listCards(query)}
            </ul>
          </div>

        </div>
      </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.object,
  location: PropTypes.object.isRequired
};

export default Cards;