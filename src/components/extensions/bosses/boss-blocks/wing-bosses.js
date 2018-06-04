import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Tooltip from 'antd/lib/tooltip';
import ExtensionBossImg from "../../../images/adventure-boss";

const WingBosses = ({extension, wing, activeBoss, wingBosses}) => {

  const mapBosses = () =>{
    return wingBosses.map(boss =>
        <Tooltip key={boss.url} title={boss.name} placement="bottom">
          <li className={boss.url === activeBoss ? 'active-boss' : ''}>
            <Link to={`/extensions/${extension}/${wing}/${boss.url}`}>
              <ExtensionBossImg extension={extension}
                                wing={wing}
                                boss={boss} />
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
  extension: PropTypes.string.isRequired,
  wing: PropTypes.string.isRequired,
  activeBoss: PropTypes.string.isRequired,
  wingBosses: PropTypes.array.isRequired,
};
