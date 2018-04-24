import React, { Component } from 'react';
import { connect } from 'react-redux';
import {icon_filters} from "../../../../globals/filters";
import Icon from "../../../../components/icon";
import {updateDeckProperty} from "../../../../redux/create-deck/actions/deck-options.action";
import './selection-styles.css';

class SelectMode extends Component {
  handleModeSelection = (e) =>{
    const {updateDeckProperty} = this.props;
    let deckMode = e.currentTarget.id;
    updateDeckProperty({deckMode})
  };

  render() {
    const {deckMode} = this.props;
    return (
      <ul>
        {icon_filters.mode.map(mode =>
          <li key={mode.url}
              className={`${mode.icon} ${mode.url === deckMode ? "active" : undefined}`}
              id={mode.url}
              onClick={this.handleModeSelection}>
              <Icon name={mode.icon}/>
              <p>{mode.name}</p>
          </li>
        )}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  const { deckMode } = state.deckDetails;
  return { deckMode };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckProperty: deckMode => dispatch(updateDeckProperty(deckMode))
  }
};

SelectMode.propTypes = {};
SelectMode.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SelectMode);