import React from 'react';
import PropTypes from "prop-types";
import Icon from "../../../../../../../components/icon";
import {rankSystem} from "../../../../../miscellaneous/rank/rank-system";
import {Tooltip} from "antd";
import {Link} from "react-router-dom";

const GeneralDetails = ({deckAuthor}) =>{
  const {username, rank} = deckAuthor;
  return (
      <div className="general-info-wrapper">
        <p className="username">{username}</p>
        <Tooltip title={<p className="reputation-tooltip">User <Link to="/rank-system"> reputation</Link></p>}
                 placement="bottom">
          <p className="reputation">
            <Icon name={`rank-${rankSystem(rank)}`}/>
            {rank}
          </p>
        </Tooltip>
      </div>
  )
};


export default GeneralDetails;

GeneralDetails.propTypes = {
  deckAuthor: PropTypes.shape({
    username: PropTypes.string,
    rank: PropTypes.number
  })
};