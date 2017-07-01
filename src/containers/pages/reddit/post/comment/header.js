import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {wrapDate} from '../../../../../utils/wrap-date';
import {wrapScore} from '../../../../../utils/wrap-score';

const CommentHeader = ({comment, isOfficialDev, handleCollapseClick}) =>{
  const {author, edited, created_utc, score} = comment;

  return (
      <div className="comment__header" onClick={handleCollapseClick}>
        <div className="author">
          <Link target="_blank" rel="noreferrer noopener" to={`https://www.reddit.com/user/${author}`}>
            {isOfficialDev === "blizzard"
                ? <span className="hs-icon icon-blizzardapp"></span>
                : <span className="hs-icon icon-reddit"></span>
            }
            <p className={isOfficialDev === "blizzard" ? "blizzard_post" : ''}>{author}</p>
            </Link>
        </div>
        <div className="votes">{wrapScore(score)}</div>
        <div className="created">{wrapDate(created_utc, edited)}</div>
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
  isOfficialDev: PropTypes.oneOfType([
      PropTypes.string,
      null
  ]),
  handleCollapseClick: PropTypes.func
};