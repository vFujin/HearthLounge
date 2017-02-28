import React, {Component} from 'react';
import 'whatwg-fetch';
export class RedditPost extends Component {

  createMarkup(obj){
   let html = '';
    html = obj.selftext_html;
    html = html.replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&amp;#39;/g, "'")
        .replace('<!-- SC_OFF -->', '')
        .replace('<!-- SC_ON -->', '')
        .replace('class', 'className');
    console.log(html);
    return {__html: html};
  }

  iframe(src, index){
    const height= 500,
          width= 500;
    return <iframe key={index} height={height} width={width} src={src}></iframe>
  }

  render() {
    return(
      <div className="choosen-deck-view">
        <div className="choosen-deck-details">
          {
            this.props.posts.filter(x => x.id === this.props.params.id).map((obj, index)=> {
              let replacedYTUrl = obj.url.replace("watch?v=", "embed/");
              let replacedYTShortenerUrl = obj.url.replace("youtu.be/", "youtube.com/embed/");
              let replacedTwitchUrl = obj.url.replace("https://clips.twitch.tv/", "");
              switch(obj.domain){
                case 'self.hearthstone':  return <div id="x" key={index}><div dangerouslySetInnerHTML={this.createMarkup(obj)} /> </div>;
                case 'youtube.com':       return this.iframe(replacedYTUrl, index);
                case 'youtu.be':          return this.iframe(replacedYTShortenerUrl, index);
                case 'clips.twitch.tv':   return this.iframe(`https://clips.twitch.tv/embed?clip=${replacedTwitchUrl}`, index);
                default: return window.open(obj.url);
              }
            })
          }
        </div>
      </div>
    )
  }
}
