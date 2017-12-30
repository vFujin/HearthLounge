import React, {Component} from 'react';
import Button from '../../../components/buttons/button';
import PropTypes from 'prop-types';

class GameChanges extends Component {
  constructor() {
    super();

    this.state = {
      activeCard: "new_mechanics_keywords"
    }
  }

  handleViewChangeClick = (e) =>{
    const target = e.currentTarget.id;
    this.setState({activeCard: target});
  };

  mapNewStuff = (newStuff) => {
    if (!newStuff) {
      return <li>No new stuff :(</li>
    }
    return newStuff.map((newStuffItem, i) =>
      <li key={i}>
        <p>{newStuffItem.name}</p>
        <p>{newStuffItem.description}</p>
      </li>
    );
  };

  render() {
    const {activeCard} = this.state;
    const {gameChanges} = this.props;
    return (
      <div className="container__blocks--block-content gameChanges">
        <div className="gameChanges__buttons">
          <Button id="new_mechanics_keywords"
                  text="New Mechanics & Keywords"
                  darkBorder
                  active={activeCard === "new_mechanics_keywords"}
                  handleClick={this.handleViewChangeClick}/>
          <Button id="new_game_functions"
                  text="New Game Functions"
                  darkBorder
                  active={activeCard === "new_game_functions"}
                  handleClick={this.handleViewChangeClick}/>
        </div>
        <ul className="gameChanges__container--list">
          {this.mapNewStuff(gameChanges[activeCard])}
        </ul>
      </div>
    )
  }
}

export default GameChanges;

GameChanges.propTypes = {
  gameChanges: PropTypes.object
};