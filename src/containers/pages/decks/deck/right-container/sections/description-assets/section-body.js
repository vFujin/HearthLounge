import React from 'react';
import PropTypes from 'prop-types';
import {convertBBCode} from '../../../../../../../components/text-editor/utils/convert-bbcode';
import TextEditor from '../../../../../../../components/text-editor/text-editor';

const SectionBody = ({description, deckEditing, editingDeckDescription, handleInputChange}) => {

  return (
      <div className="section__body">

        {deckEditing
            ? <TextEditor handleInputChange={handleInputChange}
                          editorId="deck-description"
                          value={editingDeckDescription || description}
                          handleTagInsertion={null} />
            : <div className="section__body--background">
               {convertBBCode(description)}
              </div>
        }
      </div>
  )
};

export default SectionBody;

SectionBody.propTypes = {
  description: PropTypes.string.isRequired
};