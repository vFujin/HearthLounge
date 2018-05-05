import React from 'react';
import { connect } from "react-redux";
import {createMarkup, iframe} from "../../utils/post";
import Loader from "../../../../../components/loaders/loader";

const PostText = ({activePost}) => {
  const {author_flair_css_class, domain, selftext_html, title, url} = activePost.post;

  let replacedYTUrl = url.replace("watch?v=", "embed/");
  let replacedYTShortenerUrl = url.replace("youtu.be/", "youtube.com/embed/");
  let replacedTwitchUrl = url.replace("https://clips.twitch.tv/", "");

  const render = () => {

    switch (domain) {
      case 'self.hearthstone':
        return <div
          className={`section__body--content default-style ${author_flair_css_class === "blizzard" ? "blizzard_post" : ""}`}
          dangerouslySetInnerHTML={createMarkup(selftext_html)}/>;
      case 'youtube.com':
        return iframe(replacedYTUrl);
      case 'youtu.be':
        return iframe(replacedYTShortenerUrl);
      case 'clips.twitch.tv':
        return iframe(`https://clips.twitch.tv/embed?clip=${replacedTwitchUrl}`);
      case 'i.redd.it':
      case 'i.imgur.com':
        return <img src={url} alt={title}/>;
      default:
        window.open(url);
        return <div dangerouslySetInnerHTML={createMarkup(selftext_html)}/>;
    }
  };

  return activePost.loading
    ? <Loader />
    : (
      <div className="section__body">
        {render()}
      </div>
    )
};

const mapStateToProps = state => {
  const { activePost } = state.redditPosts;
  return { activePost };
};

export default connect(mapStateToProps)(PostText);