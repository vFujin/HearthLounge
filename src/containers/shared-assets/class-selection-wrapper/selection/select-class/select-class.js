import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updatePlayerClass} from "../../../../../redux/create-deck/actions/create-deck.action";
import {icon_filters} from "../../../../../globals/filters";
import Icon from "../../../../../components/icon";
import '../selection-styles.css';

class SelectClass extends Component {
  handleClassSelection = (e) =>{
    const {updatePlayerClass} = this.props;
    let playerClass = e.currentTarget.id;
    updatePlayerClass(playerClass)
  };

  render() {
    const {deckCreation} = this.props;
    return (
      <ul>
        { icon_filters.playerClass.filter(playerClass => playerClass.url !== "neutral").map(playerClass =>
            <li key={playerClass.url}
                className={`${playerClass.url} ${playerClass.url === deckCreation.playerClass ? "active" : undefined}`}
                id={playerClass.url}
                onClick={this.handleClassSelection}>
                <Icon name={playerClass.url}/>
                <p>{playerClass.name}</p>
            </li>
          )
        }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  const {deckCreation} = state;
  return { deckCreation };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerClass: (playerClass) => (dispatch(updatePlayerClass(playerClass))),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectClass);