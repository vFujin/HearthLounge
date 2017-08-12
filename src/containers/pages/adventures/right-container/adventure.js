import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Topbar from './topbar';
import Content from './content/content'
import {adventure_details} from "../../../../data/adventure-details";
import {getAdventureDecks} from "../../../../firebase/decks/read/adventure";
import {
  fetchCardbacks, fetchAdventureDecks,
  updateAdventureCardbacks
} from "../../../../redux/actions/adventures/adventures";
import {fetchCardback} from "../../../../utils/fetch";
import {filterCardbacks} from "../../../../utils/filter/cardbacks";

class Adventure extends PureComponent{

  componentDidMount(){
    const {adventure, fetchAdventureDecks, fetchCardbacks, updateAdventureCardbacks} = this.props;
    let activeAdventure = adventure_details.filter(a => a.url === adventure)[0];

    getAdventureDecks(adventure, decks => fetchAdventureDecks(decks));
    fetchCardback(cardbacks => {
      fetchCardbacks(cardbacks);
      filterCardbacks(activeAdventure, cardbacks, data => updateAdventureCardbacks(data))
    });
  }

  componentWillReceiveProps(nextProps){
    const {adventure, cardbacks, fetchAdventureDecks, updateAdventureCardbacks} = this.props;
    let nextAdventure = adventure_details.filter(a => a.url === nextProps.adventure)[0];
    if(adventure !== nextProps.adventure){
      filterCardbacks(nextAdventure, cardbacks, data => updateAdventureCardbacks(data));
      getAdventureDecks(nextProps.adventure, decks => fetchAdventureDecks(decks));
    }
  }

  render(){
    const {adventure, adventureCardbacks, detailsChild, cards, details, decks} = this.props;
    let activeAdventure = adventure_details.filter(a => a.url === adventure)[0];
    return (
        <div className='container__page--inner container__page--right'>
          <Topbar adventure={adventure}
                  details={details}
                  boss={detailsChild}/>

          <Content adventure={activeAdventure}
                   adventureCardbacks={adventureCardbacks}
                   detailsChild={detailsChild}
                   cards={cards}
                   decks={decks}
                   details={details}/>
        </div>
    )
  }
}

const mapStateToProps = state =>{
  const {decks, cardbacks, adventureCardbacks, bossDecks} = state.adventures;
  return {decks, cardbacks, adventureCardbacks, bossDecks};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAdventureDecks: decks => dispatch(fetchAdventureDecks(_.map(decks))),
    fetchCardbacks: cardback => dispatch(fetchCardbacks(cardback)),
    updateAdventureCardbacks: adventureCardbacks => dispatch(updateAdventureCardbacks(adventureCardbacks))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Adventure);

Adventure.propTypes = {
  adventure: PropTypes.object,
  detailsChild: PropTypes.string,
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }),
  details: PropTypes.string
};