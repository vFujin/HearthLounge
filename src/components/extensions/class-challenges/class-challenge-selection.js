import React from 'react';
import {icon_filters} from "../../../globals/filters";
import Icon from "../../icon";
import {Link, withRouter} from "react-router-dom";


const ClassChallengeSelection = ({location}) => (
  <div className="container__classChallenges--selection">
    <h2>Select Class</h2>
    <ul className="classes">
      {icon_filters.playerClass.filter(playerClass => playerClass.url !== "neutral").map(playerClass =>
        <li key={playerClass.url}
            className={playerClass.url}
            id={playerClass.url}>
          <Link to={`${location.pathname}/${playerClass.url}`}>
            <Icon name={playerClass.url}/>
            <p>{playerClass.name}</p>
          </Link>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(ClassChallengeSelection);
