import React from 'react';
import PropTypes from 'prop-types';
import {mapInputCards} from "../utils/map-cards";
import {mapCards} from "../utils";
import MobileSidebar from "../left-container/mobile/sidebar";

const MobileContentWrapper = ({props, state, handleInputChange, handleSliderClick, handleIconClick}) => {
  const {filters, mode, inExtensions, inDeckCreation, cardSet, playerClass, mobileActiveTab} = state;
  const {info, cards} = props;

  return (
    <div className="container__page--mobileContentWrapper" style={{background: mobileActiveTab === "mobileTabFilters" && "#A69E9D"}}>
      {
        mobileActiveTab === "mobileTabCards"
          ? (
            <div className="content content__cards">
              <ul className="container__cards">
                {mapCards(props, state)}
              </ul>
            </div>
          )
          : (
            <div className="container__mobileFilters">
              <MobileSidebar filters={filters}
                             info={info}
                             cards={mapInputCards(props, state)}
                             allCards={cards}
                             mode={mode}
                             inExtensions={(inExtensions && cardSet) && {cardSet}}
                             inDeckCreation={(inDeckCreation && playerClass) && {playerClass}}
                             handleInputChange={handleInputChange}
                             handleSliderClick={handleSliderClick}
                             handleIconClick={handleIconClick}/>
            </div>
          )
      }
    </div>
  )
};

MobileContentWrapper.propTypes = {
  props: PropTypes.shape({
    info: PropTypes.object,
    cards: PropTypes.object
  }),
  state: PropTypes.shape({
    filters: PropTypes.object.isRequired,
    mobileActiveTab: PropTypes.string.isRequired,
    inExtensions: PropTypes.bool,
    inDeckCreation: PropTypes.bool,
    mode: PropTypes.string,
    playerClass: PropTypes.string,
    cardSet: PropTypes.string
  }),
  handleInputChange: PropTypes.func.isRequired,
  handleSliderClick: PropTypes.func.isRequired,
  handleIconClick: PropTypes.func.isRequired
};

MobileContentWrapper.defaultProps = {
  props: {
    info: {},
    cards: []
  },
  filters: {},
  inExtensions: undefined,
  inDeckCreation: undefined,
  mobileActiveTab: "mobileTabCards",
  mode: 'wild',
  playerClass: undefined,
  cardSet: undefined,
};

export default MobileContentWrapper;