import React from 'react';
import PropTypes from 'prop-types';
import Topbar from './topbar';
import Content from './content/content'

const Adventure = ({adventure, boss, cards, details}) => {

  return (
      <div className='container__page--inner container__page--right'>
        <Topbar adventure={adventure}
                details={details}
                boss={boss}/>
        <Content adventure={adventure}
                 boss={boss}
                 cards={cards}
                 details={details} />
      </div>
  )
};

Adventure.propTypes = {
  adventure: PropTypes.string,
  boss: PropTypes.string,
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }),
  details: PropTypes.string
};

export default Adventure;