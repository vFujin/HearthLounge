export const fetch = (url) =>{
  fetch(`https://www.reddit.com/r/hearthstone/comments/${this.props.params.id}.json`)
      .then(res => res.json())
      .then(res=>{
        const comments = res[1].data.children.map(obj => obj.data);
        this.props.updatePostComments(comments);
      });
};