import 'whatwg-fetch';

export const fetchRedditPosts = (callback) =>{
  fetch(`https://www.reddit.com/r/hearthstone/top.json`)
      .then(res => res.json())
      .then(res => {
        const posts = res.data.children.map(obj => obj.data).slice(0, 6);
        callback(posts);
      });
};