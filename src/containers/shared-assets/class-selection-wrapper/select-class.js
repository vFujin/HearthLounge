import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updatePlayerClass} from "../../../redux/create-deck/actions/create-deck.action";
import {icon_filters} from "../../../globals/filters";
import {Link} from "react-router-dom";
import Icon from "../../../components/icon";

class SelectClass extends Component {
  handleClassSelection = (e) =>{
    const {updatePlayerClass} = this.props;
    let playerClass = e.currentTarget.id;
    updatePlayerClass(playerClass)
  };

  render() {
    return (
      <ul>
        { icon_filters.playerClass.filter(playerClass => playerClass.url !== "neutral").map(playerClass =>
            <li key={playerClass.url}
                className={playerClass.url}
                id={playerClass.url}
                onClick={this.handleClassSelection}>
              <Link to={`/create-deck/${playerClass.url}`}>
                <Icon name={playerClass.url}/>
                <p>{playerClass.name}</p>
              </Link>
            </li>
          )
        }
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerClass: (playerClass) => (dispatch(updatePlayerClass(playerClass))),
  }
};

export default connect(null, mapDispatchToProps)(SelectClass);