import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Input from "../../../../../../../components/input";
import Icon from "../../../../../../../components/icon";

const Search = ({cards, cardSearchValue, handleInputChange}) => {
  const cardItem = ({cardId, name, cardSet}) => {
    return (
        <li id={cardId} key={cardId} data-value={name} onClick={handleInputChange}>
          <Icon name={_.kebabCase(cardSet)} type="set"/>
          <p>{name}</p>
        </li>
    )
  };

  const mapCards = () => {
    return cards.map(card => cardItem(card)).slice(0, 30)
  };

  return (
      <div className="search">
        <div className="search__wrapper">
          <Input id="search__wrapper-input"
                 className="search__wrapper-input"
                 placeholder="The Lich King"
                 value={cardSearchValue}
                 onChange={handleInputChange}
                 autoFocus={true}/>
          <ul className="search__wrapper--options">
            {cards.length !== 0 ? mapCards() : <li>Not Found</li>}
          </ul>
        </div>
      </div>
  )
};

export default Search;

Search.propTypes = {
  cards: PropTypes.array.isRequired,
  cardSearchValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};