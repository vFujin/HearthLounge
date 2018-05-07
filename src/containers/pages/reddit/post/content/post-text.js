import React from 'react';
import { connect } from "react-redux";
import {createMarkup, iframe} from "../../utils/post";
import Loader from "../../../../../components/loaders/loader";
import Icon from "../../../../../components/icon";

const PostText = ({activePost}) => {
  const {author_flair_css_class, domain, selftext_html, title, url, media, link_flair_text} = activePost.post;

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
        return <div className="media-wrapper">{iframe(replacedYTUrl)}</div>;
      case 'v.redd.it':
        return <div className="media-wrapper">{iframe(media.reddit_video.fallback_url)}</div>;
      case 'youtu.be':
        return <div className="media-wrapper">{iframe(replacedYTShortenerUrl)}</div>;
      case 'clips.twitch.tv':
        return <div className="media-wrapper">{iframe(`https://clips.twitch.tv/embed?clip=${replacedTwitchUrl}`)}</div>;
      case 'i.redd.it':
      case 'i.imgur.com':
        return <div className="media-wrapper"><img src={url} alt={title}/></div>;
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
        <div className="section__body--background">
          <Icon name={domain} type="reddit" domain={domain} linkFlairText={link_flair_text}/>
        </div>
      </div>
    )
};

const mapStateToProps = state => {
  const { activePost } = state.redditPosts;
  return { activePost };
};

export default connect(mapStateToProps)(PostText);