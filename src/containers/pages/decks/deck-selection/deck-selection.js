import React from 'react';
import DeckSnippet from '../right-container/cards-list/deck-snippet';
import {icon_filters} from '../../../../data/filters';
const DeckSelection  = (props) => {

  const mapFilters = (filter) =>{
    return (
        icon_filters[filter].map(el=>{
          return (
            <li key={el.url}>
              <span className={`hs-icon icon-${el.url}`}></span>
            </li>
          )
        })
    )
  };

  return (
      <div className="container__page container__page--twoSided decks">
        <div className="container__page--inner container__page--left">
          <h3 className="sidebar__header">Filters</h3>
          <div className="sidebar__body">

          </div>
        </div>
        <div className="container__page--inner container__page--right">
          <div className="topbar">
            <div className="topbar-left">{mapFilters('type')}</div>
            <div className="topbar-right">{mapFilters('playerClass')}</div>
          </div>
          <div className="content">
            <div className="top-decks">
              <table className="shared-table">
                <tbody>
                <tr>
                  <td className="name">Name</td>
                  <td className="class">Class</td>
                  <td className="rating">Rating</td>
                  <td className="views">Views</td>
                  <td className="mana-curve">Mana</td>
                  <td className="type">Type</td>
                  <td className="created">Created</td>
                </tr>
                <DeckSnippet handleTableRowClick={props.handleTableRowClick} class="warlock"/>
                <DeckSnippet handleTableRowClick={props.handleTableRowClick} class="hunter"/>
                <DeckSnippet handleTableRowClick={props.handleTableRowClick} class="mage"/>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
  );
};

export default DeckSelection;