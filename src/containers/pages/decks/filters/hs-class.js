import React from 'react';
import {hs_class} from '../../../data/card-filters';
import IconsWrapper from './icons-wrapper';

export const HsClassFilter = () => {
  return (
     <ul className="topbar-right">
        {hs_class.map((element, index) =>
            <li value={element.en} key={index}>
              <IconsWrapper
                  active='active'
                  icon_name={element.en}
                  element_name={element.en}
                  label={element.pl}
                  index={index} />
            </li>
        )}
      </ul>
  );
};

export default HsClassFilter;