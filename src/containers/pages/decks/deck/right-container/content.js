import React from 'react';
import DeckDescription from './sections/description/description';
import DeckComments from './sections/comments/comments';

const Content = ({params}) => (
  <div className="content scrollable">
    <div className="container__details">
      <DeckDescription />
      <DeckComments params={params}/>
    </div>
  </div>
);

export default Content;