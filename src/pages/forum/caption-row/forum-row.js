import React, { Component } from 'react';

export class ForumRow extends Component {
  render() {
    return (
      <tr className="forum-row">
        <td>
          <h5>{this.props.title}</h5>
          <p>{this.props.title_details}</p>
        </td>
        <td>
          <h5>{this.props.latest_post}</h5>
          <p>ostatnia odpowiedź dodana przez (author) - 10min temu</p>
        </td>
        <td>{this.props.threads}</td>
        <td>{this.props.posts}</td>
      </tr>
    );
  }
}