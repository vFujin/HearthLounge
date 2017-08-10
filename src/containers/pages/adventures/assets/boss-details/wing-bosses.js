import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Tooltip from 'antd/lib/tooltip';
import AdventureBossImg from "../../../../../components/images/adventure-boss";

const WingBosses = ({adventure, wing, activeBoss, wingBosses}) => {

  const mapBosses = () =>{
    return wingBosses.map(boss =>
        <Tooltip title={boss.name} placement="bottom">
          <li key={boss.url} className={boss.url === activeBoss ? 'active-boss' : ''}>
            <Link to={`/adventures/${adventure}/${wing}/${boss.url}`}>
              <AdventureBossImg adventure={adventure} wing={wing} boss={boss.url}/>
            </Link>
          </li>
        </Tooltip>
    )  
  };
  
  return (
    <ul className="container__boss--block-content wing-bosses">
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