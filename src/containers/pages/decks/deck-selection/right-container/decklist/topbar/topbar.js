import React from 'react';
import TopbarItem from "./topbar-item";

const Topbar = () => {
  return (
    <ul className="decks__decklist--topbar">
      <TopbarItem title="title"/>
      <TopbarItem title="upvotes" className="votes"/>
      <TopbarItem title="mana"/>
      <TopbarItem title="views"/>
      <TopbarItem title="mode"/>
      <TopbarItem title="comments"/>
      <TopbarItem title="created"/>
    </ul>
  )
};

export default Topbar;