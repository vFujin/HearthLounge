import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import DecksBlock from './decks/decks';
import CardsBlock from './cards/cards';
import ExtensionsBlock from './extensions/extensions';
import TournamentsBlock from './tournament/tournaments';
import CreateDeckBlock from './create-deck/create-deck';
import HomeBlock from './block';
// import { TwitchBlock } from './twitch/twitch';
import { updateViews } from '../../../firebase/decks/deck/update';
import ForumBlock from './forum/forum';
import { isFilterActive } from '../../../utils/filters';
import { UPDATE_ACTIVE_POST } from '../../../redux/reddit/active-post/types';
import {
  fetchHotDecksRequest,
  filterHotDecks,
} from '../../../redux/decks/home-decks/actions';
import { fetchActiveDeckSuccess } from '../../../redux/deck/active-deck/actions';
import { updateActiveDeckCopy } from '../../../redux/deck/active-deck-copy/actions';
import { fetchRedditPostsRequest } from '../../../redux/reddit/posts/actions';
import { fetchRedditPostCommentsRequest } from '../../../redux/reddit/comments/actions';
class Home extends PureComponent {
  componentDidMount() {
    document.title = 'Home';

    const { updateDecks, updateRedditPosts, posts, hotDecks } = this.props;
    if (hotDecks.loading) {
      updateDecks();
    }
    if (!posts.loading && !posts.all) {
      updateRedditPosts();
    }
  }

  handleDeckClick = e => {
    const { hotDecks, updateActiveDeck, updateActiveDeckCopy } = this.props;
    const { all } = hotDecks;
    let deckId = e.currentTarget.id;
    let activeDeck = all.find(deck => deck.deckId === deckId);
    updateActiveDeck(activeDeck);
    updateActiveDeckCopy(activeDeck);
    updateViews(deckId);
  };

  handleRedditPostClick = post => {
    const { updateActivePost, updatePostComments } = this.props;
    const { id } = post;

    updateActivePost(post);
    updatePostComments(id);
  };

  handleFilterClick = e => {
    const { updateDeckFilters, updateDecks } = this.props;
    const targetId = e.currentTarget.id;
    const filter = e.currentTarget.dataset.filter;
    const isActive = e.currentTarget.classList.contains('active');

    if (isActive) {
      updateDeckFilters({ [filter]: false });
      updateDecks();
    } else {
      updateDeckFilters({ [filter]: targetId });
      updateDecks({ [filter]: targetId });
    }
    isFilterActive(filter, targetId, isActive, updateDeckFilters);
  };

  render() {
    const { hotDecks, posts, deckFilters } = this.props;
    return (
      <div className="container__index home">
        <ul className="home__list">
          <DecksBlock
            hotDecks={hotDecks}
            deckFilters={deckFilters}
            handleDeckClick={this.handleDeckClick}
            handleFilterClick={this.handleFilterClick}
          />
          <HomeBlock icon="create-deck">
            <CreateDeckBlock />
          </HomeBlock>
          <HomeBlock
            icon="trophy"
            page="tournaments"
            title="upcoming tournaments"
          >
            <TournamentsBlock />
          </HomeBlock>
          <HomeBlock
            icon="extensions"
            page="extensions"
            title="latest extensions"
            width={2}
          >
            <ExtensionsBlock />
          </HomeBlock>
          <HomeBlock icon="reddit">
            <ForumBlock
              posts={posts}
              handleRedditPostClick={this.handleRedditPostClick}
            />
          </HomeBlock>
          <HomeBlock icon="all-cards" page="cards" title="cards">
            <CardsBlock />
          </HomeBlock>

          {/*<HomeBlock icon="twitch" width={2} title="top HS broadcasters">*/}
          {/*<TwitchBlock/>*/}
          {/*</HomeBlock>*/}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { hotDecks } = state.home;
  const { deckFilters } = hotDecks;
  const { posts } = state.redditPosts;
  return { hotDecks, posts, deckFilters };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDecks: payload => dispatch(fetchHotDecksRequest(payload)),
    updateActiveDeck: payload => dispatch(fetchActiveDeckSuccess(payload)),
    updateActiveDeckCopy: payload => dispatch(updateActiveDeckCopy(payload)),
    updateDeckFilters: payload => dispatch(filterHotDecks(payload)),
    updateRedditPosts: () => dispatch(fetchRedditPostsRequest()),
    updateActivePost: payload =>
      dispatch({
        type: UPDATE_ACTIVE_POST,
        payload,
      }),
    updatePostComments: payload =>
      dispatch(fetchRedditPostCommentsRequest(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
