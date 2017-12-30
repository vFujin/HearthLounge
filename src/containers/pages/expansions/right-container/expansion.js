import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Topbar from './topbar';
import Content from './content';
import {expansion_details} from "../../../../globals/expansion-details";

class Expansion extends PureComponent{
  render() {
    const {match, location} = this.props;
    const detailsChild = location.pathname.split("/")[4];
    const {details, expansion} = match.params;
    const activeExpansion = expansion_details.filter(e => e.url === expansion)[0];

    return (
        <div className="container__page--inner container__page--right">
          <Topbar expansion={activeExpansion} details={details}/>
          <Content details={details}
                   detailsChild={detailsChild}
                   activeExpansion={activeExpansion}
                   expansion={expansion}/>
        </div>
    )
  }
}


export default Expansion;

Expansion.propTypes = {
  decks: PropTypes.array,
  details: PropTypes.string,
  detailsChild: PropTypes.string,
  expansion: PropTypes.string
};