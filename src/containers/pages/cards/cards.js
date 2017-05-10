import React, { Component } from 'react';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';
import Loader from '../../../utils/loader';
import Tooltip from 'antd/lib/tooltip';
import {CardDetails} from './right-container/card-details';
import {Data} from '../../../data/cards-data';
import LazyLoad from 'react-lazyload';


export class Cards extends Component {


  handleCardClick(e, card){
    // let target = e.target;
    console.log(card);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }

  listCards(query) {
    console.log(this);
    if (this.props.cards.all.length < 1 ) {
      return <Loader/>;
    }

    //
    // let predicates = [p1, p2, p3, p4];
    //
    // let filterCard = (card) => predicates.reduce((res, pr) => res && pr(card), true);
    //
    // (card) => card.race === this.state.value;
    //
    // this.state.card.filter(filterCard);
    //
    // this.state.card.filter(x=>x.mechanics)  //p1
    // this.state.card.filter(x=>x.race)  //p2
    // this.state.card.filter(x=>x.faction)  //p3
    // this.state.card.filter(x=>x.mechanics)
    // this.state.card.filter(x=>x.mechanics)

    else {
      return (
          this.props.cards.all
              .filter(function (card) {
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

                  <li key={card.cardId} onClick={(e) => this.handleCardClick(e, card)}>
                    <LazyLoad height={250} overflow>
                      <Tooltip placement="left" title={<CardDetails card={card}/>}>
                        <img src={card.img} alt={card.name}/>
                      </Tooltip>
                    </LazyLoad>
                  </li>
              )
      )
    }
  }

  render() {
    let query = this.props.location.query;

    return (
        <div className="container__page container__page--twoSided cards">
            <div className="container__page--inner  container__page--left">
              <h3 className="sidebar__header">Filters</h3>
              <Sidebar name={this.props.cards.name}
                       race={this.props.cards.race}
                       mechanics={this.props.cards.mechanics}
                       type={this.props.cards.type}
                       faction={this.props.cards.faction}
                       cards={this.props.cards}
                       cardSet={this.props.cards.cardSet}
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