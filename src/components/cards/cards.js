import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {lazyloadCards, mapCards, updateFilters } from "./utils";

import {mapInputCards} from './utils/map-cards';
import {getCardsComponentWidth} from "../../redux/cards/actions";
import Button from '../buttons/button';
import MobileSidebar from "./left-container/mobile/sidebar";
import './cards-styles.css';
import CardsDesktop from "./cards-desktop";

class ComponentCards extends Component {
  constructor(props){
    super(props);

    this.state = {
      loadedCards: 40,
      filters: {},
      cardNotFound: "Couldn't find cards that match your query",
      infiniteScrollContainer: ".content__cards",
      mobileThreshold: 1024,
      mobileActiveTab: "mobileTabCards",

      mode: props.mode || 'wild',
      playerClass: props.playerClass || undefined,
      cardSet: props.cardSet || undefined,
      inExtensions: props.cardSet || undefined,
      inDeckCreation: props.inDeckCreation || undefined,
      filterView: props.filterView || false,
      documentTitle: props.documentTitle || false,

    }
  }

  updateCardsComponentWidth = () => {
    this.props.getCardsComponentWidth(document.getElementById("cardsContainer") && document.getElementById("cardsContainer").offsetWidth);
  };

  componentDidMount() {
    const {documentTitle, infiniteScrollContainer, loadedCards} = this.state;
    const cardsContainerWidth = document.getElementById("cardsContainer") && document.getElementById("cardsContainer").offsetWidth;
    if(documentTitle) {
      document.title = "Cards";
    }

    this.props.getCardsComponentWidth(cardsContainerWidth);
    lazyloadCards(infiniteScrollContainer, loadedCards => this.setState({loadedCards}), loadedCards);
    window.addEventListener("resize", this.updateCardsComponentWidth);
  }

  componentWillUnmount(){
    this.props.getCardsComponentWidth(null);
    window.removeEventListener("resize", this.updateCardsComponentWidth);
  }

  handleInputChange = (value, filter) => {
    const {filters, infiniteScrollContainer, mobileThreshold} = this.state;

    this.props.componentWidth > mobileThreshold ? document.querySelector(infiniteScrollContainer).scrollTop = 0 : null;
    updateFilters(state => this.setState(state), filters, filter, value);
  };

  handleIconClick = (e) =>{
    const filter = e.currentTarget.dataset.filter;
    const value = _.kebabCase(e.currentTarget.id);
    const {filters, infiniteScrollContainer, mobileThreshold} = this.state;

    this.props.componentWidth > mobileThreshold ? document.querySelector(infiniteScrollContainer).scrollTop = 0 : null;
    updateFilters(state => this.setState(state), filters, filter, value);
  };

  handleSliderClick = (value, filter) =>{
    const {filters, infiniteScrollContainer, mobileThreshold} = this.state;

    this.props.componentWidth > mobileThreshold ? document.querySelector(infiniteScrollContainer).scrollTop = 0 : null;
    updateFilters(state => this.setState(state), filters, filter, value);
  };

  handleFilterReset = (e) =>{
    const {filters, infiniteScrollContainer, mobileThreshold} = this.state;
    const filter = e.currentTarget.dataset.attr;

    this.props.componentWidth > mobileThreshold ? document.querySelector(infiniteScrollContainer).scrollTop = 0 : null;
    updateFilters(state => this.setState(state), filters, filter, undefined)
  };

  handleFilterViewToggle = () => {
    this.setState({
      filterView: !this.state.filterView
    })
  };

  handleMobileActiveTabSwitch = (e) => {
    const id = e.target.id;

    this.setState({mobileActiveTab: id})
  };

  render() {
    const {filters, mode, filterView, inExtensions, inDeckCreation, cardSet, playerClass, mobileActiveTab} = this.state;
    const {info, cards, componentWidth} = this.props;


    return componentWidth > 1024
      ? <CardsDesktop props={this.props}
                      state={this.state}
                      handleFilterReset={this.handleFilterReset}
                      handleInputChange={this.handleInputChange}
                      handleSliderClick={this.handleSliderClick}
                      handleIconClick={this.handleIconClick}
                      handleFilterViewToggle={this.handleFilterViewToggle}
      />
      : (
        <div className={`container__page container__page--mobile-${filterView ? "two" : "one"}Sided cards`} id="cardsContainer">
          <div className="container__page--mobileTopbar">
            <div>
            <p onClick={this.handleMobileActiveTabSwitch} id="mobileTabFilters">Card Filters</p>
              <div>
                {!_.isEmpty(filters) && <Button handleClick={this.handleFilterReset} type="default--active" dataAttr="clearAll" text="Clear filters"/>}
                {(inExtensions || inDeckCreation) && <Button handleClick={this.handleFilterViewToggle} type="default--active" text="Hide filters" />}
              </div>
            </div>
            <p onClick={this.handleMobileActiveTabSwitch} id="mobileTabCards">Cards</p>
          </div>
          <div className="container__page--mobileContentWrapper">
            {
              mobileActiveTab === "mobileTabCards"
                ? (
                  <div className="content content__cards">
                    <ul className="container__cards">
                      {mapCards(this.props, this.state)}
                    </ul>
                  </div>
                )
                : (
                  <div className="container__mobileFilters">
                    <MobileSidebar filters={filters}
                             info={info}
                             cards={mapInputCards(this.props, this.state)}
                             allCards={cards}
                             mode={mode}
                             inExtensions={(inExtensions && cardSet) && {cardSet}}
                             inDeckCreation={(inDeckCreation && playerClass) && {playerClass}}
                             handleInputChange={this.handleInputChange}
                             handleSliderClick={this.handleSliderClick}
                             handleIconClick={this.handleIconClick}/>
                  </div>
                )
            }
          </div>
        </div>
      )
  }
}

const mapStateToProps = state =>{
  const {info} = state;
  const {cards, componentWidth} = state.cards;
  return {cards, info, componentWidth};
};

const mapDispatchToProps = dispatch => {
  return {
    getCardsComponentWidth: payload => dispatch(getCardsComponentWidth(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentCards);

ComponentCards.propTypes = {
  mode: PropTypes.string,
  playerClass: PropTypes.string,
  inDeckCreation: PropTypes.bool,
  filterView: PropTypes.bool,
  documentTitle: PropTypes.bool
};