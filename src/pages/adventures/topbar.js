import React, { Component } from 'react';
import { Link } from 'react-router';
export class Topbar extends Component {
  render() {
    return (
        <div className="topbar">
          <ul className="adventure-content">
            <li><Link to={`/przygody/${this.props.adventure}/karty`}>Karty</Link></li>
            <li><Link to={`/przygody/${this.props.adventure}/koszt`}>Koszt</Link></li>
            <li><Link to={`/przygody/${this.props.adventure}/struktura`}>Struktura</Link></li>
            <li><Link to={`/przygody/${this.props.adventure}/bossy`}>Bossy</Link></li>
            <li><Link to={`/przygody/${this.props.adventure}/wyzwania-klasowe`}>Wyzwania Klasowe</Link></li>
          </ul>
        </div>
    );
  }
}