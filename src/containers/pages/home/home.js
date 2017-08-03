import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import DecksBlock from './decks/decks';
// import ArenaPickerBlock from './arena-picker/arena-picker';
import CardsBlock from './cards/cards';
import ExtensionsBlock from './extensions/extensions';
import TournamentsBlock from './tournament/tournaments';
import CreateDeckBlock from './create-deck/create-deck';
import HomeBlock from './block';
import { TwitchBlock } from './twitch/twitch';
import {getDecks} from "../../../firebase/decks/deck/read/index";
import {updateViews} from "../../../firebase/decks/deck/update/index";
// import ForumBlock from './forum/forum';
class Home extends PureComponent{

  componentDidMount() {
    getDecks(decks=>this.props.updateDecks(decks));
  }

  handleDeckClick = (e) =>{
    let deckId = e.currentTarget.id;

    updateViews(deckId);
  };

  render() {
    const {decks} = this.props;
    return (
        <div className="container__index home">
          <ul className="home__list">
            <DecksBlock decks={_.map(decks)} handleDeckClick={this.handleDeckClick}/>
            <HomeBlock icon="create-deck">
              <CreateDeckBlock/>
            </HomeBlock>
            <HomeBlock icon="tournament" blockTitle="tournaments">
              <TournamentsBlock/>
            </HomeBlock>
            <HomeBlock icon="expansions" width={2}>
              <ExtensionsBlock/>
            </HomeBlock>

            <HomeBlock icon="card" title="cards">
              <CardsBlock/>
            </HomeBlock>

            {/*<HomeBlock icon="twitch" width={2} title="top HS broadcasters">*/}
              {/*<TwitchBlock/>*/}
            {/*</HomeBlock>*/}
            {/*<HomeBlock icon="bubbles2" title="forum" >*/}
            {/*<ForumBlock />*/}
            {/*</HomeBlock>*/}
            {/*<HomeBlock icon="reddit" width={2}>*/}
            {/*<ForumBlock />*/}
            {/*</HomeBlock>*/}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {decks} = state.home;
  return {decks}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDecks: (decks) => (dispatch({
      type: 'UPDATE_DECKS', decks
    }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);