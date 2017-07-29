import React from 'react';
import PropTypes from 'prop-types';
import AuthorDetails from './section-footer-deck-author-details';
import Loader from '../../../../../../../components/loader';
import DeleteButton from "../../../../../../../components/buttons/delete";
const SectionFooter = ({authorId, deckAuthor, activeUser, deckEditing, handleDeckEditingClick, descriptionsNotEqual, decksNotEqual}) => {

  return (
      <div className="section__footer">
        <div className="section_footer--wrapper">
          <div className="section__footer--header">
            <h4>About author</h4>
            {(activeUser && (authorId === activeUser.uid))
                ? <div>
                    <button className="btn btn-pearl" onClick={handleDeckEditingClick}>{deckEditing ? 'Cancel editing' : 'Edit deck'}</button>
                    <DeleteButton element="deck"/>
                  {(deckEditing && (descriptionsNotEqual || decksNotEqual)) ? <button className="btn btn-pearl">Update deck</button> : null }
                  </div>
                : null}
          </div>
          {deckAuthor
              ? <AuthorDetails deckAuthor={deckAuthor}/>
              : <Loader/>
          }
        </div>
      </div>
  )
};

export default SectionFooter;

SectionFooter.propTypes = {
  author: PropTypes.string.isRequired
};