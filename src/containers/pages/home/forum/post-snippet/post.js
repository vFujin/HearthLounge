import React, { Component } from 'react';
import { PostAnswers } from './post-answers';
import { PostDetails } from './post-details';
export class PostSnippet extends Component {
  render() {
    return (
        <div className="post">
          <PostDetails/>
          <PostAnswers/>
        </div>
    );
  }
}