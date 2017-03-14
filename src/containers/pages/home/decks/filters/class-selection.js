import React from 'react';
import { icon_filters } from '../../../../../data/filters';

const ClassSelection = () => {
  return (
      <ul className="class-selection">
        {icon_filters.class.map((element, index) =>
            <li key={index} className={element.url}>
              <span className={`hs-icon icon-${element.url}`}></span>
            </li>
        )}
      </ul>
  );
};

export default ClassSelection;