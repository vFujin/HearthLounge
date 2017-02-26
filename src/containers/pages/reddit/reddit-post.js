import React, {Component} from 'react';
export class RedditPost extends Component {


  ifHasMedia(obj){
    console.log(obj);
    let replacedYTUrl = obj.url.replace("watch?v=", "embed/");
    let replacedTwitchUrl = obj.url.replace("https://clips.twitch.tv/", "");
    if(obj.media === null) {return <div>{obj.selftext}</div>;}
    else{
      switch(obj.media.type){
        case 'youtube.com': return <iframe height="400" width="600" src={replacedYTUrl}></iframe>;
        case 'youtu.be': return <iframe height="400" width="600" src={replacedYTUrl}></iframe>;
        case 'clips.twitch.tv': return <iframe autoPlay={false} height="400" width="600" src={`https://clips.twitch.tv/embed?clip=${replacedTwitchUrl}`}></iframe>;
      }
    }
  }


  render(){
    return(
        <div>
          {
            this.props.posts.filter(x => x.id === this.props.params.id).map(obj=> {
              let replacedYTUrl = obj.url.replace("watch?v=", "embed/");
              let replacedYTShortenerUrl = obj.url.replace("youtu.be/", "youtube.com/embed/");
              let replacedTwitchUrl = obj.url.replace("https://clips.twitch.tv/", "");
              switch(obj.domain){
                case 'self.hearthstone':  return <div>{obj.selftext}</div>;
                case 'twitter':           return <iframe height="400" width="500" src={`https://publish.twitter.com/oembed?format=json&url=${obj.url}`}></iframe>;
                case 'youtube.com':       return <iframe height="400" width="600" src={replacedYTShortenerUrl}></iframe>;
                case 'youtu.be':          return <iframe height="400" width="600" src={replacedYTUrl}></iframe>;
                case 'clips.twitch.tv':   return <iframe autoPlay={false} height="400" width="600" src={`https://clips.twitch.tv/embed?clip=${replacedTwitchUrl}`}></iframe>;
              }

            })
          }
        </div>
    )
  }
}
