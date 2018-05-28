import React from 'react';
import { connect } from "react-redux";
import SectionHeader from './section-header';
import SectionBody from './section-body';
import Loader from "../../../../../../../components/loaders/diamond/loader";
import './description-styles.css';

const DeckDescription = ({activeDeck}) => (
  <div className="container__details--section container__details--description v-rows-2">
    <SectionHeader />
    {activeDeck.loading
      ? <Loader/>
      : <SectionBody />
    }
  </div>
);

const mapStateToProps = state => {
  const { activeDeck } = state.deckView;
  return { activeDeck };
};

export default connect(mapStateToProps)(DeckDescription);