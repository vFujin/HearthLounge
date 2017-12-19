import React from 'react';
import {connect} from 'react-redux';
import Icon from "../../../../components/icon";

const Topbar = ({activeUser, handleUserDecksClick}) =>{
    const {role} = activeUser;
    return (
        <ul className="topbar has-icons">
            {/*<li className="home-grid">*/}
              {/*<span className="hs-icon icon-grid"></span>*/}
              {/*<div className="tooltip">*/}
                {/*<div className="caret-up"></div>*/}
                {/*<p>Homepage block scheme</p>*/}
              {/*</div>*/}
            {/*</li>*/}

            <li className="deck" onClick={handleUserDecksClick}>
              <Icon name="deck" title="Your decks" tooltip={true}/>
            </li>
          {
            role < 3 &&
            <li className="deck" onClick={handleUserDecksClick}>
              <Icon name="login" title="Users" tooltip={true}/>
            </li>
          }
            {/*<li className="tournaments">*/}
              {/*<span className="hs-icon icon-trophy"></span>*/}
              {/*<div className="tooltip">*/}
                {/*<div className="caret-up"></div>*/}
                {/*<p>Tournaments</p>*/}
              {/*</div>*/}
            {/*</li>*/}
            {/*<li className="streams">*/}
              {/*<span className="hs-icon icon-twitch"></span>*/}
              {/*<div className="tooltip">*/}
                {/*<div className="caret-up"></div>*/}
                {/*<p>Streams</p>*/}
              {/*</div>*/}
            {/*</li>*/}
            {/*<Tooltip title="stats" placement="bottom">*/}
              {/*<li className="stats">*/}
                {/*<span className="hs-icon icon-stats-dots"></span>*/}
              {/*</li>*/}
            {/*</Tooltip>*/}
        </ul>
    )
};

const mapStateToProps = state =>{
  const {activeUser} = state.users;
  return {activeUser};
};

export default connect(mapStateToProps, null)(Topbar);