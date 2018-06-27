import React from 'react';
import PropTypes from 'prop-types';
import MobileTopbarTab from "./tab";
import './mobile-topbar-styles.css';

const MobileTopbar = ({tabs, activeMobileTab, handleTabClick}) => {
  const mapTabs = () => tabs.map(tab => {
    return <MobileTopbarTab name={tab}
                            key={tab}
                            width={100 / tabs.length}
                            handleTabClick={handleTabClick}
                            activeMobileTab={activeMobileTab} />
  });

  return (
    <div className="container__page--topbarMobile">
      {mapTabs()}
    </div>
  )
};

MobileTopbar.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeMobileTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired
};

export default MobileTopbar;
