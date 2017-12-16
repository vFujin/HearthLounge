import React from 'react';
import PropTypes from 'prop-types';
import {convertBBCode} from '../../../../../../../../components/text-editor/utils/convert-bbcode';
import {connect} from "react-redux";

const Preview = ({deckText}) => (
      <div className="container__details--section container__details--preview v-rows-2">
        <div className="section__header">
          <div className="line"></div>
          <h1>Preview</h1>
        </div>
        <div id="foo" className="section__body default-style">
          {convertBBCode(deckText)}
        </div>
      </div>
);

const mapStateToProps = (state) => {
  const {deckText} = state.deckDetails;
  return {deckText}
};

export default connect(mapStateToProps, null)(Preview)

Preview.propTypes = {
  deckText: PropTypes.string
};