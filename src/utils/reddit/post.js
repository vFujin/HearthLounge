import React from 'react';
export const createMarkup = (obj) =>{
  if(obj) {
    let html = obj;
    html = html.replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&amp;#39;/g, "'")
        .replace(/&amp;/g, "&")
        .replace('<!-- SC_OFF -->', '')
        .replace('<!-- SC_ON -->', '')
        .replace('[[', '<span class="card" style="font-weight: bold;">')
        .replace(']]', '</span>')
        .replace('class="md"', '');
    return {__html: html};
  }
};

export const iframe = (src, index)=>{
  const height= 500, width= 500;
  return <iframe key={index} height={height} width={width} src={src}></iframe>
};

export const filterPosts = (posts, params) => {
  return posts.filter(post => post.id === params.id).map((post, index) => {
    const {author_flair_css_class, domain, selftext_html, url} = post;

    let replacedYTUrl = url.replace("watch?v=", "embed/");
    let replacedYTShortenerUrl = url.replace("youtu.be/", "youtube.com/embed/");
    let replacedTwitchUrl = url.replace("https://clips.twitch.tv/", "");

    switch (domain) {
      case 'self.hearthstone':
        return <div key={index}
                    className={`section__body--content default-style ${author_flair_css_class === "blizzard" ? "blizzard_post" : ""}`}
                    dangerouslySetInnerHTML={createMarkup(selftext_html)}/>;
      case 'youtube.com':
        return iframe(replacedYTUrl, index);
      case 'youtu.be':
        return iframe(replacedYTShortenerUrl, index);
      case 'clips.twitch.tv':
        return iframe(`https://clips.twitch.tv/embed?clip=${replacedTwitchUrl}`, index);
      default: return window.open(url);
    }
  })
};