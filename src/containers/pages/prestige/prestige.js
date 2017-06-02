import React from 'react';

const Prestige = () =>{
  return (
    <p>
      What is Prestige? How do I earn (and lose) it?
      {/*The primary way to gain prestige is by posting good comments*/}
      You gain prestige when:
      deck is voted up: +2
      deck comment is voted up: +2
      post is voted up: +5
      post comment is voted up: +5

      You lose prestige when:
      your deck comment is downvoted: -2
      your post comment is downvoted: -2
      you vote down a deck comment: -1
      you vote down a post comment: -1
      one of your posts receives 10 spam or offensive flags: -100
      one of your comments receives 10 spam or offensive flags: -50
      one of your decks receives 10 spam or offensive flags: -50
    </p>

  )
};

export default Prestige;