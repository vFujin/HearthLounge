import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {timeDifference} from '../../../../../utils/unix-to-date';

const CommentHeader = ({comment, isOfficialDev}) =>{
  const {author, created_utc, score} = comment;
  return (
      <div className="comment__header">
        <div className="author">
          <Link to={`https://www.reddit.com/user/${author}`}>
            {isOfficialDev === "blizzard"
                ? <span className="hs-icon icon-blizzardapp"></span>
                : <span className="hs-icon icon-reddit"></span>
            }
            <p>{author}</p>
            </Link>
        </div>
        <div className="votes">
          {score}
          </div>
        <div className="created">{timeDifference(created_utc, false)}</div>
      </div>
  )
};

export default CommentHeader;

CommentHeader.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string,
    created_utc: PropTypes.number,
    score: PropTypes.number
  }),
  isOfficialDev: PropTypes.func
};