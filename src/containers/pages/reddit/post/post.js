import React from 'react';
import axios from 'axios';
const RedditPost = (props) => {
  const{posts, params} = props;

  const componentDidMount = () =>{
    axios.get(`https://www.reddit.com/r/hearthstone/comments.json`)
        .then(res => {
          const posts = res.data.data.children.map(x=>x.data);
          console.log(posts);
        });
  };
  componentDidMount();

  const createMarkup = (obj) =>{
    let html = obj.selftext_html;
    html = html.replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&amp;#39;/g, "'")
        .replace(/&amp;/g, "&")
        .replace('<!-- SC_OFF -->', '')
        .replace('<!-- SC_ON -->', '')
        .replace('class', 'className');
    console.log(html);
    return {__html: html};
  };

  const iframe = (src, index)=>{
    const height= 500, width= 500;
    return <iframe key={index} height={height} width={width} src={src}></iframe>
  };

  const filterPosts = () => {
    return posts.filter(p => p.id === params.id).map((obj, index) => {
      let url = obj.url;
      let replacedYTUrl = url.replace("watch?v=", "embed/");
      let replacedYTShortenerUrl = url.replace("youtu.be/", "youtube.com/embed/");
      let replacedTwitchUrl = url.replace("https://clips.twitch.tv/", "");

      switch (obj.domain) {
        case 'self.hearthstone':
          return <div key={index} className="section-body" dangerouslySetInnerHTML={createMarkup(obj)}/>;
        case 'youtube.com':
          return iframe(replacedYTUrl, index);
        case 'youtu.be':
          return iframe(replacedYTShortenerUrl, index);
        case 'clips.twitch.tv':
          return iframe(`https://clips.twitch.tv/embed?clip=${replacedTwitchUrl}`, index);
        default:
          window.open(url);
          break;
      }
    })
  };

  return(
    <div className="choosen-deck-view">
      <div className="choosen-deck-details">
        <div className="section description">
          <div className="section-header"><h1><span>{props.posts.filter(x=>x.id === params.id).map(x=>x.title)[0]}</span></h1></div>
          {filterPosts()}
        </div>

        </div>
    </div>
  )
};

export default RedditPost;

RedditPost.propTypes = {
  posts: React.PropTypes.array,
  params: React.PropTypes.object
};