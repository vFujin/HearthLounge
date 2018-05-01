import React from 'react';
import CardDecklistSearch from "../../cards/assets/card-decklist-search";
import './styles.css';

const AddCardWrapper = ({disabled}) => (
  <div className={`decklistSidebar__card--addCard ${disabled ? "decklistSidebar__card--addCard-disabled" : undefined}`}>
    <CardDecklistSearch/>
  </div>
);

export default AddCardWrapper;