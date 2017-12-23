import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Tooltip from 'antd/lib/tooltip';
import AdventureBossImg from "../../../images/adventure-boss";

const WingBosses = ({adventure, wing, activeBoss, wingBosses}) => {

  const mapBosses = () =>{
    return wingBosses.map(boss =>
        <Tooltip key={boss.url} title={boss.name} placement="bottom">
          <li className={boss.url === activeBoss ? 'active-boss' : ''}>
            <Link to={`/adventures/${adventure}/${wing}/${boss.url}`}>
              <AdventureBossImg adventure={adventure} wing={wing} boss={boss.url}/>
            </Link>
          </li>
        </Tooltip>
    )  
  };
  
  return (
    <ul className="container__blocks--block-content wing-bosses">
      {mapBosses()}
    </ul>
  )
};

export default WingBosses;

WingBosses.propTypes = {
  adventure: PropTypes.string.isRequired,
  wing: PropTypes.string.isRequired,
  activeBoss: PropTypes.string.isRequired,
  wingBosses: PropTypes.array.isRequired,
};