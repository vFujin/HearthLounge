import React from 'react';
import { connect } from "react-redux";
import Icon from "../../../../../../components/icon";
import Loader from "../../../../../../components/loaders/loader";

const SidebarHeader = ({activeDeck}) =>{
  const {loading, type} = activeDeck;

  return (
      <h3 className="sidebar__header">
        Deck Details
        {/*{loading*/}
          {/*? <Icon name={type} type="mode"/>*/}
          {/*: <div style={{height: "50%"}}> <Loader/> </div>*/}
        {/*}*/}
      </h3>
  )
};

const mapStateToProps = state => {
  const { activeDeck } = state.deckView;
  return { activeDeck };
};

export default connect(mapStateToProps)(SidebarHeader);
