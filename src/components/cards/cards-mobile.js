import React from 'react';
import MobileTopbar from "./mobile-layout/mobile-topbar";
import MobileContentWrapper from "./mobile-layout/mobile-content-wrapper";

const CardsMobile = ({props, state, handleMobileActiveTabSwitch, handleFilterReset, handleFilterViewToggle, handleInputChange, handleSliderClick, handleIconClick}) => {
  const {filters, filterView, inExtensions, inDeckCreation, mobileActiveTab, mobileThreshold} = state;
  const {componentWidth} = props;
  const componentWidthAboveMobileThreshold = componentWidth > mobileThreshold;
  return (
    <div className={`container__page container__page--mobile-${filterView ? "two" : "one"}Sided cards`} id="cardsContainer">
      <MobileTopbar mobileActiveTab={mobileActiveTab}
                    componentWidthAboveMobileThreshold={componentWidthAboveMobileThreshold}
                    filters={filters}
                    inExtensions={inExtensions}
                    inDeckCreation={inDeckCreation}
                    handleFilterViewToggle={handleFilterViewToggle}
                    handleFilterReset={handleFilterReset}
                    handleMobileActiveTabSwitch={handleMobileActiveTabSwitch}
      />
      <MobileContentWrapper props={props}
                            state={state}
                            handleFilterReset={handleFilterReset}
                            handleInputChange={handleInputChange}
                            handleSliderClick={handleSliderClick}
                            handleIconClick={handleIconClick}/>
    </div>
  )
};


export default CardsMobile;