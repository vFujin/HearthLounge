import React from 'react';
import PropTypes from 'prop-types';
import {convertBBCode} from '../../../../../../../../components/text-editor/utils/convert-bbcode';


const Preview = ({deckText}) =>{
  return (
      <div className="container__details--section container__details--preview v-rows-2">
        <div className="section__header">
          <div className="line"></div>
          <h1>Preview</h1>
        </div>
        <div id="foo" className="section__body default-style">
          {convertBBCode(deckText)}
        </div>
      </div>
  )
};

Preview.propTypes = {
  deckText: PropTypes.string
};

export default Preview;