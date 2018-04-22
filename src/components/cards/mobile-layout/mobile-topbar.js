import React from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
import Button from '../../buttons/button';

const MobileTopbar = ({mobileActiveTab, componentWidthAboveMobileThreshold, filters, inExtensions, inDeckCreation, handleFilterViewToggle, handleFilterReset, handleMobileActiveTabSwitch}) => {
  const activeFiltersClass = mobileActiveTab === "mobileTabFilters" ? "active" : undefined;
  const activeCardsClass = mobileActiveTab === "mobileTabCards" ? "active" : undefined;

  return (
    <div className="container__page--mobileTopbar">
      <div onClick={handleMobileActiveTabSwitch}
           id="mobileTabFilters"
           className={activeFiltersClass}>
        <p>Card Filters</p>
        <div>
          {!_.isEmpty(filters) && <Button handleClick={handleFilterReset} type="default--active" id="foo" dataAttr="clearAll" text="Clear filters"/>}
          {(inExtensions || inDeckCreation) && componentWidthAboveMobileThreshold && <Button handleClick={handleFilterViewToggle} type="default--active" text="Hide filters" />}
        </div>
      </div>
      <p onClick={handleMobileActiveTabSwitch}
         className={activeCardsClass}
         id="mobileTabCards">Cards</p>
    </div>
  )
};

MobileTopbar.propTypes = {
  mobileActiveTab: PropTypes.string.isRequired,
  componentWidthAboveMobileThreshold: PropTypes.bool.isRequired,
  filters: PropTypes.object.isRequired,
  handleFilterViewToggle: PropTypes.func.isRequired,
  handleFilterReset: PropTypes.func.isRequired,
  handleMobileActiveTabSwitch: PropTypes.func.isRequired,
  inExtensions: PropTypes.bool,
  inDeckCreation: PropTypes.bool
};

MobileTopbar.defaultProps = {
  mobileActiveTab: "mobileTabCards",
  filters: {},
  inExtensions: undefined,
  inDeckCreation: undefined,
};

export default MobileTopbar;