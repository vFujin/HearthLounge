import React from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
import Button from '../../buttons/button';

const MobileTopbar = ({filters, inExtensions, inDeckCreation, handleFilterViewToggle, handleFilterReset, handleMobileActiveTabSwitch}) => {
  return (
    <div className="container__page--mobileTopbar">
      <div>
        <p onClick={handleMobileActiveTabSwitch} id="mobileTabFilters">Card Filters</p>
        <div>
          {!_.isEmpty(filters) && <Button handleClick={handleFilterReset} type="default--active" dataAttr="clearAll" text="Clear filters"/>}
          {(inExtensions || inDeckCreation) && <Button handleClick={handleFilterViewToggle} type="default--active" text="Hide filters" />}
        </div>
      </div>
      <p onClick={handleMobileActiveTabSwitch} id="mobileTabCards">Cards</p>
    </div>
  )
};

MobileTopbar.propTypes = {
  filters: PropTypes.object.isRequired,
  handleFilterViewToggle: PropTypes.func.isRequired,
  handleFilterReset: PropTypes.func.isRequired,
  handleMobileActiveTabSwitch: PropTypes.func.isRequired,
  inExtensions: PropTypes.bool,
  inDeckCreation: PropTypes.bool
};

MobileTopbar.defaultProps = {
  filters: {},
  inExtensions: undefined,
  inDeckCreation: undefined,
};

export default MobileTopbar;