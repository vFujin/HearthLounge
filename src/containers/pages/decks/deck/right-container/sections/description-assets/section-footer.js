import React from 'react';
import PropTypes from 'prop-types';
import AuthorDetails from '../../topbar-assets/deck-author-details';
import Loader from '../../../../../../../components/loaders/loader';
import SectionFooterHeader from './section-footer-assets/section-footer-header';

const SectionFooter = ({authorId, deckAuthor, activeUser, deckEditView, handleDeckEditingClick, descriptionsNotEqual, decksNotEqual}) => {

  const authorDetails = () => {
    return deckAuthor
        ? <AuthorDetails deckAuthor={deckAuthor}/>
        : <Loader/>
  };

  return (
      <div className="section__footer">
        <div className="section_footer--wrapper">
          <SectionFooterHeader authorId={authorId}
                               activeUser={activeUser}
                               deckEditView={deckEditView}
                               descriptionsNotEqual={descriptionsNotEqual}
                               decksNotEqual={decksNotEqual}
                               handleDeckEditingClick={handleDeckEditingClick}

          />
          {/*{authorDetails()}*/}
        </div>
      </div>
  )
};

export default SectionFooter;

SectionFooter.propTypes = {
  author: PropTypes.string
};