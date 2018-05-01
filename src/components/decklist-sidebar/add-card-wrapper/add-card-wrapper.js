import React from 'react';
import CardDecklistSearch from "../../cards/assets/card-decklist-search";
import './styles.css';

const AddCardWrapper = () => (
  <div className="decklistSidebar__card--add">
    <CardDecklistSearch/>
    <span>+</span>
  </div>
);

export default AddCardWrapper;