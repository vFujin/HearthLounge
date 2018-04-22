import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {lazyloadCards, updateFilters } from "./utils";
import {getCardsComponentWidth} from "../../redux/cards/actions";
import CardsDesktop from "./cards-desktop";
import CardsMobile from "./cards-mobile";
import './styles/cards-styles.css';
import './styles/cards-mobile-styles.css';
import './styles/cards-media-queries.css';


class ComponentCards extends Component {
  constructor(props){
    super(props);

    this.state = {
      loadedCards: 40,
      filters: {},
      cardNotFound: "Couldn't find cards that match your query",
      infiniteScrollContainer: ".content__cards",
      mobileThreshold: 1024,
      mobileActiveTab: "mobileTabFilters",

      mode: props.mode || 'wild',
      playerClass: props.playerClass || undefined,
      cardSet: props.cardSet || undefined,
      inExtensions: props.cardSet || undefined,
      inDeckCreation: props.inDeckCreation || undefined,
      filterView: props.filterView || props.componentWidth <= 1024 && true,
      documentTitle: props.documentTitle || false,

    }
  }

  scrollToTop = () => {
    const {infiniteScrollContainer, mobileThreshold} = this.state;
    const {componentWidth} = this.props;

    if(componentWidth > mobileThreshold) {
      return document.querySelector(infiniteScrollContainer).scrollTop = 0;
    }
  };

  updateCardsComponentWidth = () => {
    const cardsContainer = document.getElementById("cardsContainer");
    this.props.getCardsComponentWidth(cardsContainer && cardsContainer.offsetWidth);
  };

  componentDidMount() {
    const {documentTitle, infiniteScrollContainer, loadedCards} = this.state;
    const {getCardsComponentWidth} = this.props;
    const cardsContainer = document.getElementById("cardsContainer");
    const cardsContainerWidth = cardsContainer && cardsContainer.offsetWidth;

    if(documentTitle) {
      document.title = "Cards";
    }

    getCardsComponentWidth(cardsContainerWidth);
    lazyloadCards(infiniteScrollContainer, loadedCards => this.setState({loadedCards}), loadedCards);
    window.addEventListener("resize", this.updateCardsComponentWidth);
  }

  componentWillUnmount(){
    const {getCardsComponentWidth} = this.props;
    getCardsComponentWidth(null);
    window.removeEventListener("resize", this.updateCardsComponentWidth);
  }

  handleInputChange = (value, filter) => {
    const {filters} = this.state;

    this.scrollToTop();
    updateFilters(state => this.setState(state), filters, filter, value);
  };

  handleIconClick = (e) =>{
    const filter = e.currentTarget.dataset.filter;
    const value = _.kebabCase(e.currentTarget.id);
    const {filters} = this.state;

    this.scrollToTop();
    updateFilters(state => this.setState(state), filters, filter, value);
  };

  handleSliderClick = (value, filter) => {
    const {filters} = this.state;

    this.scrollToTop();
    updateFilters(state => this.setState(state), filters, filter, value);
  };

  handleFilterReset = (e) =>{
    const {filters} = this.state;
    const filter = e.currentTarget.dataset.attr;

    this.scrollToTop();
    updateFilters(state => this.setState(state), filters, filter, undefined)
  };

  handleFilterViewToggle = () => {
    this.setState({ filterView: !this.state.filterView })
  };

  handleMobileActiveTabSwitch = (e) => {
    const id = e.currentTarget.id;
    this.setState({mobileActiveTab: id})
  };

  render() {
    const {mobileThreshold} = this.state;
    const {componentWidth} = this.props;

    return componentWidth > mobileThreshold
      ? <CardsDesktop props={this.props}
                      state={this.state}
                      handleFilterReset={this.handleFilterReset}
                      handleInputChange={this.handleInputChange}
                      handleSliderClick={this.handleSliderClick}
                      handleIconClick={this.handleIconClick}
                      handleFilterViewToggle={this.handleFilterViewToggle}
      />
      : <CardsMobile props={this.props}
                     state={this.state}
                     handleMobileActiveTabSwitch={this.handleMobileActiveTabSwitch}
                     handleFilterReset={this.handleFilterReset}
                     handleFilterViewToggle={this.handleFilterViewToggle}
                     handleInputChange={this.handleInputChange}
                     handleSliderClick={this.handleSliderClick}
                     handleIconClick={this.handleIconClick}
      />
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