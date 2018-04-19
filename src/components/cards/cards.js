import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {lazyloadCards, mapCards, updateFilters } from "./utils";
import Topbar from "./right-container/topbar";
import Sidebar from "./left-container/sidebar";
import {mapInputCards} from './utils/map-cards';
import {getCardsComponentWidth} from "../../redux/cards/actions";

class ComponentCards extends Component {
  constructor(props){
    super(props);

    this.state = {
      loadedCards: 40,
      filters: {},
      cardNotFound: "Couldn't find cards that match your query",
      infiniteScrollContainer: ".content__cards",

      mode: props.mode || 'wild',
      playerClass: props.playerClass || undefined,
      cardSet: props.cardSet || undefined,
      inExtensions: props.cardSet || undefined,
      inDeckCreation: props.inDeckCreation || undefined,
      filterView: props.filterView || false,
      documentTitle: props.documentTitle || false
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
    const {filters, infiniteScrollContainer} = this.state;

    document.querySelector(infiniteScrollContainer).scrollTop = 0;
    updateFilters(state => this.setState(state), filters, filter, value);
  };

  handleIconClick = (e) =>{
    const filter = e.currentTarget.dataset.filter;
    const value = _.kebabCase(e.currentTarget.id);
    const {filters, infiniteScrollContainer} = this.state;

    document.querySelector(infiniteScrollContainer).scrollTop = 0;
    updateFilters(state => this.setState(state), filters, filter, value);
  };

  handleSliderClick = (value, filter) =>{
    const {filters, infiniteScrollContainer} = this.state;

    document.querySelector(infiniteScrollContainer).scrollTop = 0;
    updateFilters(state => this.setState(state), filters, filter, value);
  };

  handleFilterReset = (e) =>{
    const {filters, infiniteScrollContainer} = this.state;
    const filter = e.currentTarget.dataset.attr;

    document.querySelector(infiniteScrollContainer).scrollTop = 0;
    updateFilters(state => this.setState(state), filters, filter, undefined)
  };

  handleFilterViewToggle = () =>{
    this.setState({
      filterView: !this.state.filterView
    })
  };

  render() {
    const {filters, mode, filterView, inExtensions, inDeckCreation, cardSet, playerClass} = this.state;
    const {info, cards} = this.props;

    return (
      <div className={`container__page container__page--${filterView ? "two" : "one"}Sided cards`} id="cardsContainer">
        {
          filterView &&
          <Sidebar filters={filters}
                   info={info}
                   cards={mapInputCards(this.props, this.state)}
                   allCards={cards}
                   mode={mode}
                   inExtensions={(inExtensions && cardSet) && {cardSet}}
                   inDeckCreation={(inDeckCreation && playerClass) && {playerClass}}
                   handleFilterViewToggle={this.handleFilterViewToggle}
                   handleFilterReset={this.handleFilterReset}
                   handleInputChange={this.handleInputChange}
                   handleSliderClick={this.handleSliderClick}
                   handleIconClick={this.handleIconClick}/>
        }
        <div className={`container__page--inner container__page--right ${filterView ? undefined : "no-filters"}`}>
          {
            filterView &&
            <Topbar filters={filters}
                    inDeckCreation={(inDeckCreation && playerClass) && {playerClass}}
                    handleIconClick={this.handleIconClick}/>
          }
          <div className="content content__cards">
            <ul className="container__cards">
              {mapCards(this.props, this.state)}
            </ul>
          </div>
        </div>
        {!filterView && <div className="toggle-filters" onClick={this.handleFilterViewToggle}>Toggle Filters</div>}
      </div>
    )
  }
}

const mapStateToProps = state =>{
  const {info} = state;
  const {cards} = state.cards;
  return {cards, info};
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