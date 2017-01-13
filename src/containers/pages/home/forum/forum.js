import React, { Component } from 'react';
import { Link } from 'react-router';
import { PostSnippet } from './post-snippet/post'
export class ForumBlock extends Component {
  render() {
    return (
        <li className={'home__block forum block-width-1'}>
          <Link to={'/forum'}>
            <div className="header">Najnowsze Tematy</div>
          </Link>
          <PostSnippet/>
          <PostSnippet/>
          <PostSnippet/>
          <PostSnippet/>
          <PostSnippet/>
        </li>
    );
  }
}