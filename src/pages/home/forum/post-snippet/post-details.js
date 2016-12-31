import React, { Component } from 'react';
export class PostDetails extends Component {
  render() {
    return (
      <div className="about">
        <div className="topic">Yada yada, yada?</div>
        <div className="details">
          <div className="author">ostatnia odpowiedź (author) - </div>
          <div className="created">10min temu</div>
        </div>
      </div>
    );
  }
}