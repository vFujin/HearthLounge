import React from 'react';
import PropTypes from 'prop-types';
import DSViews from "./views";
import DSComments from "./comments";
import DSVotes from "./votes";

const DSBodyFooter = ({views, comments, votes}) => {

  return (
      <div className="deckSnippet__body--footer">
        <DSViews views={views}/>
        <DSComments comments={comments}/>
        <DSVotes votes={votes}/>
      </div>
  );
};

export default DSBodyFooter;

DSBodyFooter.propTypes = {
  views: PropTypes.number.isRequired,
  votes:PropTypes.number.isRequired,
  comments: PropTypes.number
};