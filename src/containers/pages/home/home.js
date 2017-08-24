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
class Home extends PureComponent{

  componentDidMount() {
    getDecks(false, decks=>this.props.updateDecks(decks));
    fetchRedditPosts(data => this.props.updateRedditPosts(data))
  }

  handleDeckClick = (e) =>{
    let deckId = e.currentTarget.id;

    updateViews(deckId);
  };

  handlePlayerClassFilterClick = (e) =>{
    let playerClass = e.currentTarget.id;
    getDecks(playerClass, decks => this.props.updateDecks(decks))
  };

  render() {
    const {decks, redditPosts} = this.props;
    return (
        <div className="container__index home">
          <ul className="home__list">
            <DecksBlock decks={_.map(decks)}
                        handleDeckClick={this.handleDeckClick}
                        handlePlayerClassFilterClick={this.handlePlayerClassFilterClick}/>
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
  const {decks, redditPosts} = state.home;
  return {decks, redditPosts};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDecks: (decks) => (dispatch({
      type: 'UPDATE_DECKS', decks
    })),
    updateRedditPosts: (redditPosts) => dispatch({
      type: 'UPDATE_REDDIT_POSTS', redditPosts
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);