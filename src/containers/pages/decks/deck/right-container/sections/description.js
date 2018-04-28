import React from 'react';
import { connect } from "react-redux";
import SectionHeader from './description-assets/section-header';
import SectionBody from './description-assets/section-body';
import Loader from "../../../../../../components/loaders/loader";

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