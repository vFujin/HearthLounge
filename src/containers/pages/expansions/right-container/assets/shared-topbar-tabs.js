import React from 'react';
import PropTypes from 'prop-types';
import Overview  from './shared-expansion-tabs/overview';
import ExpansionCards  from './shared-expansion-tabs/cards';
import Arena  from './shared-expansion-tabs/arena';
import Preorder  from './shared-expansion-tabs/preorder';
import StandardMode  from './shared-expansion-tabs/standard-mode';

const SharedTopbarTabs = ({cards, details, expansion}) => {

  return (
      <div className={`${expansion} ${details}`}>
        <Overview       topbarActiveTabUrl={details} expansion={expansion} />
        <ExpansionCards topbarActiveTabUrl={details} expansion={expansion} cards={cards}/>
        <Arena          topbarActiveTabUrl={details}/>
        <Preorder       topbarActiveTabUrl={details}/>
        <StandardMode   topbarActiveTabUrl={details}/>
      </div>
  );
};

SharedTopbarTabs.propTypes = {
  cards:     PropTypes.array,
  details:   PropTypes.string.isRequired,
  expansion: PropTypes.string.isRequired
};

export default SharedTopbarTabs;
