import React from 'react';
// import ManaCurve from "../../../components/mana-curve/mana-curve";
import ManaCurve from './mana-curve';
import Icon from "../../../components/icons/icon";

export const DeckSnippetBody = ({prefix, archetype, comments, deck, hsClass, views, votes}) => {
  const {Minion, Spell, Weapon} = deck.types;
  return (
      <div className={`${prefix}-body`}>
        <div className={`${prefix}-body-header`}>
          <div className={`${prefix}-type`}>{archetype} {hsClass}</div>
          <ManaCurve prefix={prefix} deck={deck} max={deck.max}/>

        </div>
        <div className={`${prefix}-body-body`}>
          <div className={`${prefix}-minions`}>
            <Icon name="minions"/>
            {Minion || 0}
          </div>
          <div className={`${prefix}-spells`}>
            <Icon name="fire"/>
            {Spell || 0}
            </div>
          <div className={`${prefix}-weapons`}>
            <Icon name="warrior"/>
            {Weapon || 0}
          </div>
        </div>
        <div className={`${prefix}-body-footer`}>
          <div className={`${prefix}-views`}>
            <Icon name="eye"/>
            <p>{views || 0}</p>
          </div>
          <div className={`${prefix}-comments`}>
            <Icon name="bubbles2" />
            {comments || 0}
          </div>
          <div className={`${prefix}-votes`}>
            <Icon name="circle-up"/>
            {votes || 0}
          </div>
        </div>
      </div>
  );
};

export default DeckSnippetBody;