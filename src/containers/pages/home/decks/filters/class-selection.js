import React from 'react';
import { hs_class } from '../../../../../data/filters';

const ClassSelection = () => {
  return (
      <ul className="class-selection">
        {hs_class.map((element, index) =>
            <li key={index} className={element.url}>
              <span className={`hs-icon icon-${element.url}`}></span>
            </li>
        )}
      </ul>
  );
};

export default ClassSelection;