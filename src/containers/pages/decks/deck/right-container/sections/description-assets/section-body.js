import React from 'react';
import PropTypes from 'prop-types';
import {convertBBCode} from '../../../../../../shared-assets/editor/text-editor-functions';

const SectionBody = ({description}) => {
  return (
      <div className="section__body">
        <div className="section__body--background">
          {convertBBCode(description)}
        </div>
      </div>
  )
};

export default SectionBody;