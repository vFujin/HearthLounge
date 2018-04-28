import React from 'react';
import { connect } from "react-redux";

const SectionHeader = ({title, loading}) => (
  <div className="section__header">
    {!loading && <div className="line"/>}
    <h1 className={loading ? "loading" : undefined}>{title}</h1>
  </div>
);

const mapStateToProps = state => {
  const { title, loading } = state.deckView.activeDeck;
  return { title, loading };
};

export default connect(mapStateToProps)(SectionHeader);