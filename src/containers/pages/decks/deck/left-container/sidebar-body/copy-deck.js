import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from "react-copy-to-clipboard";
import Icon from "../../../../../../components/icon";
import {success} from "../../../../../../utils/messages";

const CopyDeck = ({deckstring, hsClass}) =>{
  return (
      <CopyToClipboard text={deckstring} onCopy={()=>success('Successfully copied deckstring to clipboard!')}>
        <div className={`${hsClass} active-shadow`}>Copy deck <Icon name="copy"/></div>
      </CopyToClipboard>
  )
};

export default CopyDeck;

CopyDeck.propTypes = {
  deckstring: PropTypes.string.isRequired,
  hsClass: PropTypes.string.isRequired
};