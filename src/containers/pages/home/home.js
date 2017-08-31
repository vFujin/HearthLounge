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
import {fetchFilteredDecks, isFilterActive} from "./utils/deck-filters";
import {FETCH_REDDIT_POSTS_REQUEST} from "../../../redux/types/reddit";
class Home extends PureComponent{

  componentDidMount() {
    getDecks(false, null, false, decks=>this.props.updateDecks(decks));
    console.log(this.props.updateRedditPosts());

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
    const {decks, posts, deckFilters} = this.props;
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
              <ForumBlock posts={posts}/>
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
  const {decks, deckFilters} = state.home;
  const {posts} = state.redditPosts;
  return {decks, posts, deckFilters};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDecks: (decks) => (dispatch({
      type: 'UPDATE_DECKS', decks
    })),
    updateDeckFilters: (deckFilters) => dispatch({
      type: 'UPDATE_DECK_FILTERS', deckFilters
    }),
    updateRedditPosts: () => dispatch({type: FETCH_REDDIT_POSTS_REQUEST})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);