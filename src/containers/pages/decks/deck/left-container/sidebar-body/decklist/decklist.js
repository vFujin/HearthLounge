import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import TableBody from "./table-body";
import TableHead from "./table-head";
import {deckBroaden, deckSimplification} from "../../../../../../../utils/deck/edit-mode";
import {updateActiveDeckCopy} from "../../../../../../../redux/deck/active-deck-copy/actions";
import Loader from "../../../../../../../components/loaders/loader";

class Decklist extends Component {
  handleCardRemovalClick = (e) =>{
    const {cards, deckView} = this.props;
    const {activeDeckCopy} = deckView;
    const deck = deckBroaden(activeDeckCopy, cards);

    let targetCardId = e.currentTarget.id;
    let updatedDeck = deck.filter(c => c.cardId !== targetCardId);
    let simplifiedDeck = deckSimplification(updatedDeck);

    updateActiveDeckCopy({deck: simplifiedDeck});
  };

  render() {
    const {activeDeck, cards, deckEditView} = this.props;

    return (
      <div className="list cards-list">
        {activeDeck.loading
          ? <Loader theme="light"/>
          : (
            <div className="table-scroll">
              <table>
                <TableHead deckEditView={deckEditView}/>
                <TableBody fetchedDeckCards={cards || []}
                           deckEditView={deckEditView}
                           handleCardRemovalClick={this.handleCardRemovalClick}/>
              </table>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { activeDeck, activeDeckCopy, tools } = state.deckView;
  const { cards } = activeDeckCopy;
  const { deckEditView } = tools;
  return { activeDeck, cards, deckEditView };
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveDeckCopy: payload => dispatch(updateActiveDeckCopy(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Decklist);

Decklist.propTypes = {
  deckEditView: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
  cards: PropTypes.object
};