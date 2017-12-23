import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import Topbar from './topbar';
import Content from './content';
import {expansion_details} from "../../../../globals/expansion-details";
import {getAdventureDecks} from "../../../../firebase/decks/read/adventure";
import {fetchAdventureDecks} from "../../../../redux/actions/expansions/expansions.action";

class Expansion extends Component{

  componentDidMount(){
    // const {match, fetchAdventureDecks} = this.props;
    // getAdventureDecks(match.params.expansion, decks => fetchAdventureDecks(decks));
  }

  render() {
    const {decks, match, location} = this.props;
    const detailsChild = location.pathname.split("/")[4];
    const {details, expansion} = match.params;
    const activeExpansion = expansion_details.filter(e => e.url === expansion)[0];

    return (
        <div className="container__page--inner container__page--right">
          <Topbar expansion={activeExpansion} details={details}/>
          <Content decks={decks}
                   details={details}
                   detailsChild={detailsChild}
                   activeExpansion={activeExpansion}
                   expansion={expansion}/>
        </div>
    )
  }
}

const mapStateToProps = state =>{
  const {decks, bossDecks} = state.expansions;
  return {decks, bossDecks};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAdventureDecks: decks => dispatch(fetchAdventureDecks(_.map(decks))),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Expansion);

Expansion.propTypes = {
  decks: PropTypes.array,
  details: PropTypes.string,
  detailsChild: PropTypes.string,
  expansion: PropTypes.string
};