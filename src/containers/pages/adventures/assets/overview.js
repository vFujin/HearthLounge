import React from 'react';

const AdventureOverview = props => {
  const {adventure, details} = props;
  return (
      <div className={`overview ${details === 'overview' && 'active'}-view`}>
        <img src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/${adventure}.jpg`}
             alt={adventure}/>
      </div>
  );
};

AdventureOverview.propTypes = {
  adventure: React.PropTypes.string.isRequired,
  details: React.PropTypes.string.isRequired,
};

export default AdventureOverview;