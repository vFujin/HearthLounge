import React from 'react';
import ManaCurve from './mana-curve';
export const DeckSnippetBody = (props) => {
  let prefix = props.prefix;
  return (
      <div className={`${prefix}-body`}>
        <div className={`${prefix}-body-header`}>
          <div className={`${prefix}-type`}>Renohunter</div>
          <ManaCurve prefix={prefix}/>

        </div>
        <div className={`${prefix}-body-body`}>
          <div className={`${prefix}-minions`}><span className="hs-icon icon-minions"></span> 10</div>
          <div className={`${prefix}-spells`}><span className="hs-icon icon-fire"></span> 14</div>
          <div className={`${prefix}-weapons`}><span className="hs-icon icon-warrior"></span> 6</div>
        </div>
        <div className={`${prefix}-body-footer`}>
          <div className={`${prefix}-views`}>
            <span className="hs-icon icon-eye"></span>
            <p>10k</p>
          </div>
          <div className={`${prefix}-comments`}><span className="hs-icon icon-bubbles2"></span> 42</div>
          <div className={`${prefix}-votes`}><span className="hs-icon icon-circle-up"></span> 14</div>
        </div>
      </div>
  );
};

export default DeckSnippetBody;