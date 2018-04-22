import React, {Component} from 'react';
import MobileTopbar from "./mobile-layout/mobile-topbar";
import MobileContentWrapper from "./mobile-layout/mobile-content-wrapper";
import {lazyloadCards} from "./utils";

class CardsMobile extends Component {
  state = {
    mobileActiveTab: "mobileTabCards"
  };

  componentDidMount() {
    const {cardsState, handleLazyloadUpdate} = this.props;
    const {infiniteScrollContainer, loadedCards} = cardsState;
    lazyloadCards(infiniteScrollContainer, loadedCards => handleLazyloadUpdate(loadedCards), loadedCards);
  }

  handleMobileActiveTabSwitch = (e) => {
    const id = e.currentTarget.id;
    this.setState({mobileActiveTab: id})
  };

  render() {
    const {mobileActiveTab} = this.state;
    const {cardsProps, cardsState, handleLazyloadUpdate, handleFilterReset, handleFilterViewToggle, handleInputChange, handleSliderClick, handleIconClick} = this.props;
    const {filters, filterView, inExtensions, inDeckCreation, mobileThreshold} = cardsState;
    const {componentWidth} = cardsProps;
    const componentWidthAboveMobileThreshold = componentWidth > mobileThreshold;
    return (
      <div className={`container__page container__page--mobile-${filterView ? "two" : "one"}Sided cards`}
           id="cardsContainer">
        <MobileTopbar mobileActiveTab={mobileActiveTab}
                      componentWidthAboveMobileThreshold={componentWidthAboveMobileThreshold}
                      filters={filters}
                      inExtensions={inExtensions}
                      inDeckCreation={inDeckCreation}
                      handleFilterViewToggle={handleFilterViewToggle}
                      handleFilterReset={handleFilterReset}
                      handleMobileActiveTabSwitch={this.handleMobileActiveTabSwitch}
        />
        <MobileContentWrapper cardsProps={cardsProps}
                              cardsState={cardsState}
                              mobileActiveTab={mobileActiveTab}
                              handleLazyloadUpdate={handleLazyloadUpdate}
                              handleFilterReset={handleFilterReset}
                              handleInputChange={handleInputChange}
                              handleSliderClick={handleSliderClick}
                              handleIconClick={handleIconClick}/>
      </div>
    )
  }
}


export default CardsMobile;