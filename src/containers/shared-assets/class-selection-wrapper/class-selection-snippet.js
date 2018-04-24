import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {icon_filters} from '../../../globals/filters';
import Icon from "../../../components/icon";
import DeckImport from './deck-import';
import { updatePlayerClass } from "../../../redux/create-deck/actions/create-deck.action";

class ClassSelectionSnippet extends Component{

  handleClassSelection = (e) =>{
    const {updatePlayerClass} = this.props;
    let playerClass = e.currentTarget.id;
    updatePlayerClass(playerClass)
  };

  listClasses = () =>{
    const {page} = this.props;

    return (
        icon_filters.playerClass.filter(playerClass=> playerClass.url !== "neutral").map(playerClass =>
            <li key={playerClass.url}
                className={playerClass.url}
                id={playerClass.url}
                onClick={this.handleClassSelection}>
              <Link to={`/${page}/${playerClass.url}`}>
                <Icon name={playerClass.url} />
                <p>{playerClass.name}</p>
              </Link>
            </li>
        )
    )
  };

  render() {
    return (
      <div className={`container__page container__page--oneSided class-selection create-deck`}>
        <div className="container__page--inner container__class-selection">
          <h3>Create deck from scratch</h3>
          <ul>
            {this.listClasses()}
          </ul>
        </div>
        <div className="separator"><p>or</p></div>
        <DeckImport />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerClass: (playerClass) => (dispatch(updatePlayerClass(playerClass))),
  }
};

export default connect(null, mapDispatchToProps)(ClassSelectionSnippet)