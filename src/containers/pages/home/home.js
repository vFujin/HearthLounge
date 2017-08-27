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
import {getDecks} from "../../../firebase/decks/deck/read";
import {updateViews} from "../../../firebase/decks/deck/update";
import ForumBlock from './forum/forum';
import {fetchRedditPosts} from "../../../api/reddit";
import {fetchFilteredDecks, isFilterActive} from "./utils/deck-filters";
class Home extends PureComponent{

  componentDidMount() {
    getDecks(false, null, false, decks=>this.props.updateDecks(decks));
    fetchRedditPosts(data => this.props.updateRedditPosts(data))
  }

  handleDeckClick = (e) =>{
    let deckId = e.currentTarget.id;
    updateViews(deckId);
  };

  handleFilterClick = (e) =>{
    const {updateDeckFilters, updateDecks, deckFilters} = this.props;
    let targetId = e.currentTarget.id;
    let filter = e.currentTarget.dataset.filter;
    let isActive = e.currentTarget.classList.contains('active');

    isFilterActive(filter, targetId, isActive, updateDeckFilters);
    fetchFilteredDecks(deckFilters, filter, targetId, updateDecks);
  };

  render() {
    const {decks, redditPosts, deckFilters} = this.props;
    return (
        <div className="container__index home">
          <ul className="home__list">
            <DecksBlock decks={_.map(decks)}
                        deckFilters={deckFilters}
                        handleDeckClick={this.handleDeckClick}
                        handleFilterClick={this.handleFilterClick}/>
            <HomeBlock icon="create-deck">
              <CreateDeckBlock/>
            </HomeBlock>
            <HomeBlock icon="trophy" blockTitle="tournaments">
              <TournamentsBlock/>
            </HomeBlock>
            <HomeBlock icon="expansions" blockTitle="extensions" width={2}>
              <ExtensionsBlock/>
            </HomeBlock>
            <HomeBlock icon="reddit">
              <ForumBlock posts={redditPosts}/>
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

          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {decks, redditPosts, deckFilters} = state.home;
  return {decks, redditPosts, deckFilters};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDecks: (decks) => (dispatch({
      type: 'UPDATE_DECKS', decks
    })),
    updateDeckFilters: (deckFilters) => dispatch({
      type: 'UPDATE_DECK_FILTERS', deckFilters
    }),
    updateRedditPosts: (redditPosts) => dispatch({
      type: 'UPDATE_REDDIT_POSTS', redditPosts
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);