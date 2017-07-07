import React from 'react';
import Topbar from './topbar';
import Content from './content'

const Adventure = ({adventure, boss, cards, details}) => {
  return (
      <div className='container__page--inner container__page--right'>
        <Topbar adventure={adventure}
                details={details}
                boss={boss}/>
        <Content cards={cards} details={details} adventure={adventure}/>
      </div>
  )
};

Adventure.propTypes = {
  children:   React.PropTypes.element.isRequired,
  location:   React.PropTypes.object.isRequired,
  params:     React.PropTypes.object.isRequired,
  adventure:  React.PropTypes.string,
  details:    React.PropTypes.string,
  boss:       React.PropTypes.string
};

export default Adventure;