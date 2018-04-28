import React from 'react';
import { connect } from "react-redux";
import TableBody from "./table-body";
import TableHead from "./table-head";
import Loader from "../../../../../../../components/loaders/loader";

const Decklist = ({activeDeck, cards, deckEditView}) => {
    const {loading} = activeDeck;

    return (
      <div className="list cards-list">
        {loading
          ? <Loader theme="light"/>
          : (
            <div className="table-scroll">
              <table>
                <TableHead deckEditView={deckEditView}/>
                <TableBody fetchedDeckCards={cards || []}
                           deckEditView={deckEditView}/>
              </table>
            </div>
          )
        }
      </div>
    )
};

const mapStateToProps = state => {
  const { activeDeck, activeDeckCopy, tools } = state.deckView;
  const { cards } = activeDeckCopy;
  const { deckEditView } = tools;
  return { activeDeck, cards, deckEditView };
};

export default connect(mapStateToProps)(Decklist);