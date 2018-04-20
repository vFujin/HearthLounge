import React from 'react';
import MobileTopbar from "./mobile-layout/mobile-topbar";
import MobileContentWrapper from "./mobile-layout/mobile-content-wrapper";

const CardsMobile = ({props, state, handleMobileActiveTabSwitch, handleFilterReset, handleFilterViewToggle, handleInputChange, handleSliderClick, handleIconClick}) => {
  const {filters, filterView, inExtensions, inDeckCreation} = state;

  return (
    <div className={`container__page container__page--mobile-${filterView ? "two" : "one"}Sided cards`} id="cardsContainer">
      <MobileTopbar filters={filters}
                    inExtensions={inExtensions}
                    inDeckCreation={inDeckCreation}
                    handleFilterViewToggle={handleFilterViewToggle}
                    handleFilterReset={handleFilterReset}
                    handleMobileActiveTabSwitch={handleMobileActiveTabSwitch}
      />
      <MobileContentWrapper props={props}
                            state={state}
                            handleInputChange={handleInputChange}
                            handleSliderClick={handleSliderClick}
                            handleIconClick={handleIconClick}/>
    </div>
  )
};


export default CardsMobile;