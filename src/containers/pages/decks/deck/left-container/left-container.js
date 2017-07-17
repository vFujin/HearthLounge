import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Loader from '../../../../../utils/loader';
import ManaCurve from '../../../create-deck/after-class-selection/left-container/sidebar/details/mana-curve/mana-curve'
import Select from 'antd/lib/select';
import 'antd/lib/select/style/index.css';

const LeftContainer = ({cards, currentDeck, editingDecklist, deckEditing, handleCardRemovalClick, updateDecklist}) =>{

  const listCards = () =>{
    if(editingDecklist){
      // let countByCost = _.countBy(editingDecklist.cards, (card)=>card.cost < 7 ? card.cost : 7);
      // console.log(countByCost)

      let cardNames = Object.keys(editingDecklist.cards);
      return _.map(editingDecklist.cards).map((c, i)=>
        <tr key={i}>
          <td>set</td>
          <td>{cardNames[i]}</td>
          <td>{c.amount}</td>
          <td><span className={`hs-icon icon-mana-${c.cost}`}></span></td>

          {deckEditing
              ? <td>
                <div id={cardNames[i]}
                     data-cost={c.cost}
                     data-amount={c.amount} onClick={(e)=>handleCardRemovalClick(e)}>
                  <span   className="hs-icon icon-cross"></span>
                </div>
              </td>
            : null}
        </tr>
    )}
    return <Loader/>
  };

  const handleCardAddition = (value) => {
    let filteredCard = cards.allCards.find(card => card.name === value);
    let editingDecklistCards = editingDecklist.cards;
    console.log(Object.entries(editingDecklistCards).filter(k => k[0] === filteredCard.name));
    let manaCurve = editingDecklist.manaCurve;

    let decklistAfterCardAddition = Object.keys(editingDecklistCards).reduce((result, card) => {
      if(card !== filteredCard.name){
        result = Object.assign(editingDecklistCards, {
          [filteredCard.name]: {
            amount: 1,
            cost: filteredCard.cost,
            type: filteredCard.type
          }
        });
      } else {
        console.log("before, ",card, result[card].amount)
        result[card].amount = 2;
        console.log("after, ",card, result[card].amount)
      }

    }, editingDecklistCards);


    let manacurveAfterCostAddition =  manaCurve.map((c, i) => {
      //edge case for 7+ cost cards
      return Object.entries(editingDecklistCards).filter(k => k[0] === filteredCard.name).map(card => {
        if ((i == filteredCard.cost) && !(card[1].amount >= 2)) {
          return Number(c) + 1;
        }
        return c;
      })[0];
    });

    let max = _.max(manacurveAfterCostAddition);

    updateDecklist({
      cards: decklistAfterCardAddition,
      manaCurve: manacurveAfterCostAddition,
      max
      //add type
    });

  };

  const search = () => {
    if(cards.allCards.length > 0) {
      const Option = Select.Option;
      const options = cards.allCards
          .filter(card => (card.type !== "Hero" && card.collectible === true && (card.playerClass === _.startCase(currentDeck.hsClass) || card.playerClass === 'Neutral')))
          .map(card => <Option value={card.name} key={card.name}>{card.name}</Option>);
      return (
          <Select mode="combobox"
                  placeholder="Card name..."
                  style={{width: '80%'}}
                  allowClear={true}
                  disabled={_.map(editingDecklist.card).length >= 30 ? true : false}
                  showSearch={true}
                  onSelect={(v)=>handleCardAddition(v)}>
            {options}
          </Select>
      )
    }
    return "foo"
  };


  return(
      <div className={`container__page--inner container__page--left ${deckEditing ? 'edit-mode' : ''}`}>
        <h3 className="sidebar__header">
          Deck Details
          <span className={`hs-icon icon-${currentDeck.type === "standard" ? "mammoth" : currentDeck.type}`}></span>
        </h3>
        <div className="sidebar__body">
          <div className="container__mana-curve">
            <h3>Mana Curve</h3>
            {editingDecklist ? <ManaCurve deck={editingDecklist.cards} max={editingDecklist.max}/> : <Loader/>}
            <h3>Cards</h3>
            <div className="list cards-list">
              <div className="table-scroll">
                <table>
                  <thead>
                  <tr>
                    <th>Set</th>
                    <th>Card</th>
                    <th>Amount</th>
                    <th colSpan={deckEditing ? 2 : null}>Cost</th>
                  </tr>
                  </thead>
                  <tbody>
                  {listCards()}
                  </tbody>
                </table>
              </div>
            </div>
            <table>
            </table>
          </div>
          {deckEditing
              ? <div className="addCard-wrapper">
                  {search()}
                  <span>+</span>
                </div>
              : null
          }
          <div className="background">
            <span className={`hs-icon icon-${currentDeck.hsClass}`}></span>
          </div>

        </div>
      </div>
  )
};

export default LeftContainer;

LeftContainer.propTypes = {
  currentDeck: PropTypes.shape({
    archetype: PropTypes.string,
    author: PropTypes.string,
    created: PropTypes.number,
    deck: PropTypes.shape({
      cards: PropTypes.object,
      manaCurve: PropTypes.array,
      types: PropTypes.object,
    }),
    deckId: PropTypes.string,
    description: PropTypes.string,
    hsClass: PropTypes.string,
    patch: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    views: PropTypes.number,
    upvotes: PropTypes.number,
    downvotes: PropTypes.number,
  })
};