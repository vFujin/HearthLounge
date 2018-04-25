import React, {Component} from "react";
import PropTypes from "prop-types";
import AboutDeck from "../../right-container/content-assets/deck-description/save-deck-assets/about-deck";
import Preview from "../../right-container/content-assets/deck-description/save-deck-assets/preview";
import DeckOptionsMobileTopbar from "./deck-options-mobile-topbar";
import './deck-options-mobile-styles.css';

class DeckOptionsMobile extends Component {

  state = {
    activeDeckDetailsTab: "aboutDeck"
  };

  handleTabClick = e => {
    const tab = e.currentTarget.id;

    this.setState({activeDeckDetailsTab: tab})
  };

  render() {
    const {activeDeckDetailsTab} = this.state;
    const {playerClass} = this.props;
    return (
      <div className="container__details container__details--mobile">
        <DeckOptionsMobileTopbar handleTabClick={this.handleTabClick}
                                 activeDeckDetailsTab={activeDeckDetailsTab}/>
        <div className="container__details--wrapper">
          {activeDeckDetailsTab === "aboutDeck"
            ? <AboutDeck playerClass={playerClass}/>
            : <Preview />
          }
        </div>
      </div>
    );
  }
}

export default DeckOptionsMobile;

DeckOptionsMobile.propTypes = {
  playerClass: PropTypes.string,
};