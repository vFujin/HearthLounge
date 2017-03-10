import React from 'react';
import { Link } from 'react-router';
const ArenaPickerBlock = () => {
  return (
      <li className={'home__block arena-picker block-width-1'}>
        <Link to={'/arena-picker'}>
          <div className="header">Arena Picker</div>
        </Link>
        (filmik)
      </li>
  );
};

export default ArenaPickerBlock;