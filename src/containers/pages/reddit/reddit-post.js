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

  tweet(tweet){
    console.log(tweet);
    fetch(`https://publish.twitter.com/oembed?url=${tweet}`, {
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*"
      }
    })
        .then(res=>{
          console.log(res);
          return <div>{res.author_name}</div>;
        })
  }

  render() {


    return(
        <div className="wrapper">
          <div className="left-container"></div>
          <div className="right-container">
            <div className="topbar"></div>
            <div className="choosen-deck-view">
              <div className="choosen-deck-details">
                {
                  this.props.posts.filter(x => x.id === this.props.params.id).map((obj, index)=> {
                    let replacedYTUrl = obj.url.replace("watch?v=", "embed/");
                    let replacedYTShortenerUrl = obj.url.replace("youtu.be/", "youtube.com/embed/");
                    let replacedTwitchUrl = obj.url.replace("https://clips.twitch.tv/", "");
                    switch(obj.domain){
                      case 'self.hearthstone':  return <div id="x" key={index}><div dangerouslySetInnerHTML={this.createMarkup(obj)} /> </div>;
                      case 'twitter.com':           return this.tweet(obj.url);
                      case 'youtube.com':       return <iframe key={index} height="400" width="600" src={replacedYTUrl}></iframe>;
                      case 'youtu.be':          return <iframe key={index} height="400" width="600" src={replacedYTShortenerUrl}></iframe>;
                      case 'clips.twitch.tv':   return <iframe key={index} height="400" width="600" src={`https://clips.twitch.tv/embed?clip=${replacedTwitchUrl}`}></iframe>;
                    }

                  })
                }
              </div>
            </div>

          </div>
        </div>
    )
  }
}
